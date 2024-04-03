'use strict';

class Drawer {
  constructor(container, config) {
    this.container = container;
    this.config = config;
  }

  draw(mergedMap) {
    this.container.innerHTML = '';

    for (let y = 0; y < mergedMap.length; y++) {
      for (let x = 0; x < mergedMap[y].length; x++) {
        const cellType = mergedMap[y][x];

        const element = document.createElement('div');
        const classNames = this.config[cellType].class.split(' ');
        classNames.forEach((className) => {
          element.classList.add(className);
        });

        if ([2, 3].includes(cellType)) {
          this.#connectSameCells(y, x, cellType, mergedMap, element);
        }

        if (this.config[cellType].events) {
          this.#addEvents(element, cellType, y, x);
        }

        this.container.appendChild(element);
      }
    }
  }

  #addEvents(element, cell, y, x) {
    const events = this.config[cell].events;

    for (const eventType in events) {
      const handler = events[eventType];
      element.addEventListener(eventType, () => handler(y, x));
    }
  }

  #connectSameCells(y, x, cellType, mergedMap, element) {
    const directionNames = { '0,1': 'Right', '0,-1': 'Left', '-1,0': 'Top', '1,0': 'Bottom' };
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dy, dx] of directions) {
      const posY = y + dy;
      const posX = x + dx;
      if (posY < 0 || posX < 0 || posY > 9 || posX > 9 || mergedMap[posY][posX] != cellType) {
        continue;
      }

      const dirStr = `${dy},${dx}`;
      const border = 'border' + directionNames[dirStr];

      element.style[border] = 'hidden';
    }
  }
}

export default Drawer;
