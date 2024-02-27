'use strict';

import Map from '@/battleships/map.js';
import Ship from '@/battleships/ship.js';

class Player {
  constructor() {
    this.#init();
  }

  getUntouchedCells() {
    const cells = [];

    for (let row of this.map.value) {
      for (let cell of row) {
        if (!cell.isHit) {
          cells.push(cell);
        }
      }
    }

    return cells;
  }

  isLost() {
    return this.ships.every((ship) => ship.isDead);
  }

  validShipPosition(y, x, size, orientation) {
    // orientation - 0 horizontal, 1 vertical
    const verticalSize = orientation ? size - 1 : 0;
    const horizontalSize = orientation ? 0 : size - 1;

    if (y + verticalSize > 9 || x + horizontalSize > 9) {
      return false;
    }

    let left = Math.max(0, x - 1);
    const right = Math.min(x + 1 + horizontalSize, 9);

    let top = Math.max(0, y - 1);
    const bottom = Math.min(y + 1 + verticalSize, 9);

    for (top; top <= bottom; top++) {
      for (left; left <= right; left++) {
        const cell = this.map.value[top][left];

        if (cell.type !== 'sea') {
          return false;
        }
      }
    }

    return true;
  }

  #createShip(y, x, size, orientation) {
    if (!this.validShipPosition(y, x, size, orientation)) {
      return false;
    }

    let shipCells = [];

    for (let i = 0; i < size; i++) {
      let cell = this.map.value[y][x];
      cell.type = 'ship';
      shipCells.push(cell);
      orientation ? y++ : x++;
    }

    const ship = new Ship(shipCells);
    this.ships.push(ship);

    return true;
  }

  #placeShipsRandomly() {
    const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    for (let size in shipSizes) {
      let shipCreated = false;

      while (!shipCreated) {
        const orient = parseInt(Math.random() * 2);

        const y = parseInt(Math.random() * 10);
        const x = parseInt(Math.random() * 10);

        shipCreated = this.#createShip(y, x, size, orient);
      }
    }
  }

  #init() {
    this.map = new Map(10, 10);
    this.ships = [];

    this.#placeShipsRandomly();
  }
}

export default Player;
