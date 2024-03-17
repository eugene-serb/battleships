'use strict';

class Drawer {
  constructor(container, config) {
    this.container = container;
    this.config = config;
  }

  draw(map, event) {
    this.container.innerHTML = '';

    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        const cell = map[y][x];

        const el = document.createElement('div');

        this.config[cell].class.split(' ').forEach((className) => {
          el.classList.add(className);
        });

        if (!cell && event) {
          el.addEventListener('click', () => event(x, y));
        }

        this.container.appendChild(el);
      }
    }
  }
}

export default Drawer;
