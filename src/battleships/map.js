'use strict';

import Cell from '@/battleships/cell.js';

class Map {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.value = this.#createMap(this.width, this.height);
  }

  #createMap(width, height) {
    const map = [];

    for (let y = 0; y < height; y++) {
      const row = [];

      for (let x = 0; x < width; x++) {
        const cell = new Cell(x, y);
        row.push(cell);
      }

      map.push(row);
    }

    return map;
  }
}

export default Map;
