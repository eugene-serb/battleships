'use strict';

import Board from '@/game/models/map';
import Ship from '@/game/models/ship';
import { getRandomNumber } from '@/game/utils/random';

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
    const verticalSize = orientation ? size : 1;
    const horizontalSize = orientation ? 1 : size;

    if (y + verticalSize > 10 || x + horizontalSize > 10) {
      return false;
    }

    for (let dy = y - 1; dy < y + 1 + verticalSize; dy++) {
      for (let dx = x - 1; dx < x + 1 + horizontalSize; dx++) {
        if (dy >= 0 && dy < 10 && dx >= 0 && dx < 10 && this.map.value[dy][dx].type != 'sea') {
          return false;
        }
      }
    }

    return true;
  }

  #createShip(y, x, size, orientation) {
    let shipCells = [];

    for (let i = 0; i < size; i++) {
      let cell = this.map.value[y][x];
      cell.type = 'ship';
      shipCells.push(cell);
      orientation ? y++ : x++;
    }

    return new Ship(shipCells);
  }

  #placeShipsRandomly() {
    const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    for (let size of shipSizes) {
      let y, x, orientation;

      do {
        orientation = getRandomNumber(0, 2);

        y = getRandomNumber(0, 10);
        x = getRandomNumber(0, 10);
      } while (!this.validShipPosition(y, x, size, orientation));

      const ship = this.#createShip(y, x, size, orientation);

      this.#addShipPointers(ship);
      this.ships.push(ship);
    }
  }

  #addShipPointers(ship) {
    for (const cell of ship.cells) {
      this.shipPointers.set(cell, ship);
    }
  }

  #init() {
    this.map = new Board(10, 10);
    this.ships = [];
    this.shipPointers = new Map();

    this.#placeShipsRandomly();
  }
}

export default Player;
