'use strict';

import Map from './map.js';
import Ship from './ship.js';

export default class Player {
  constructor() {
    this.map = new Map(10, 10);
    this.ships = [];
    this.cell_names = {
      sea: 0,
      'sea-hit': 1,
      ship: 2,
      'ship-hit': 3,
    };
  }

  clear() {
    this.map = new Map(10, 10);
    this.ships = [];
  }

  getUntouchedCells() {
    let cells = [];

    for (let row of this.map.map) {
      for (let cell of row) {
        if (cell.type == 'sea' || cell.type == 'ship') {
          cells.push(cell);
        }
      }
    }

    return cells;
  }

  isLost() {
    return this.ships.every((ship) => ship.isDead);
  }

  getMergedMap() {
    const data_map = [];

    for (let row of this.map) {
      const new_row = [];
      for (let cell of row) {
        let value = this.cell_names[cell.type];
        new_row.push(value);
      }
      data_map.push(new_row);
    }

    return data_map;
  }

  placeShipsRandomly() {
    this.clear();

    const ship_sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    for (let size in ship_sizes) {
      let ship_created = false;

      while (!ship_created) {
        const orient = parseInt(Math.random() * 2);

        const y = parseInt(Math.random() * 10);
        const x = parseInt(Math.random() * 10);

        ship_created = this.createShip(y, x, size, orient);
      }
    }
  }

  createShip(y, x, size, orientation) {
    if (!this.validShipPosition(y, x, size, orientation)) {
      return false;
    }

    let ship_cells = [];

    for (let i = 0; i < size; i++) {
      let cell = this.map.map[y][x];
      cell.type = 'ship';
      ship_cells.push(cell);
      orientation ? y++ : x++;
    }

    const ship = new Ship(ship_cells);
    this.ships.push(ship);

    return true;
  }

  validShipPosition(y, x, size, orientation) {
    // orientation - 0 horizontal, 1 vertical
    const vertical_size = orientation ? size - 1 : 0;
    const horizontal_size = orientation ? 0 : size - 1;

    if (y + vertical_size > 9 || x + horizontal_size > 9) {
      return false;
    }

    let left = Math.max(0, x - 1);
    const right = Math.min(x + 1 + horizontal_size, 9);

    let top = Math.max(0, y - 1);
    const bottom = Math.min(y + 1 + vertical_size, 9);

    for (top; top <= bottom; top++) {
      for (left; left <= right; left++) {
        const cell = this.map.map[top][left];
        if (cell.type != 'sea') {
          return false;
        }
      }
    }

    return true;
  }
}
