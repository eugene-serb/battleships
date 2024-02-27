'use strict';

class Ship {
  constructor(cells) {
    this.cells = cells;
    this.isDead = false;
  }

  checkHealth() {
    if (this.cells.every((cell) => cell.isHit)) {
      this.isDead = true;
    }
  }
}

export default Ship;
