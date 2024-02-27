'use strict';

class Drawer {
  constructor(containerField, config) {
    this.containerField = containerField;
    this.config = config;
  }

  draw(map) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        const el = map[y][x];

        const cell = document.createElement('div');

        this.config[el].class.split(' ').forEach((className) => {
          cell.classList.add(className);
        });

        if (this.config[el].handle) {
          cell.addEventListener('click', () => this.config[el].handle(x, y));
        }

        this.containerField.appendChild(cell);
      }
    }
  }
}

export default Drawer;
