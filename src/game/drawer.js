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
}

export default Drawer;
