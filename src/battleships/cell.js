'use strict';

class Cell {
  constructor(x, y, type = 'sea') {
    this.x = x;
    this.y = y;
    this.type = type;
    this.isHit = false;
  }
}

export default Cell;
