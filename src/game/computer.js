'use strict';

import { getRandomElement } from './utils/random';

class Computer {
  constructor(opponent) {
    this.opponent = opponent;
    this.shipForAttack = undefined;
  }

  getAttackCoordinate() {
    if (!this.shipForAttack || this.shipForAttack.isDead) {
      let cells = this.opponent.getUntouchedCells();
      const maxShipSize = this.#getMaxShipSize(this.opponent.ships);

      if (maxShipSize > 1) {
        cells = this.#getPriorityCells(cells, maxShipSize);
      }

      const cell = getRandomElement(cells);

      if (cell.type == 'ship') {
        const ship = this.opponent.shipPointers.get(cell);
        if (ship.cells.length > 1) {
          this.shipForAttack = ship;
        } else {
          this.shipForAttack = undefined;
        }
      }

      return [cell.y, cell.x];
    } else {
      const choices = this.#getCellsAroundShip(this.shipForAttack);
      const cell = getRandomElement(choices);

      return [cell.y, cell.x];
    }
  }

  #getCellsAroundDamagedCell(cell, opponentMap) {
    let cellsAroundDamageCell = [];
    for (let y = cell.y - 1; y <= cell.y + 1; y++) {
      for (let x = cell.x - 1; x <= cell.x + 1; x++) {
        if (0 <= y && y <= 9 && 0 <= x && x <= 9) {
          if (!opponentMap[y][x].isHit) {
            cellsAroundDamageCell.push(opponentMap[y][x]);
          }
        }
      }
    }
    return cellsAroundDamageCell;
  }

  #getCellsAroundShip(ship) {
    let cellsForAttack = [];

    for (const cell of ship.cells) {
      if (cell.isHit) {
        const neighborCells = this.#getCellsAroundDamagedCell(cell, this.opponent.map.value);
        cellsForAttack.push(...neighborCells);
      }
    }

    return cellsForAttack;
  }

  #getPriorityCells(cells, expand) {
    let priorityCells = [];
    let maxScore = -1;

    for (const cell of cells) {
      const cellScore = this.#getCellScore(cell, expand);

      if (cellScore < maxScore) {
        continue;
      }

      if (cellScore > maxScore) {
        maxScore = cellScore;
        priorityCells = [];
      }

      priorityCells.push(cell);
    }

    return priorityCells;
  }

  #getCellScore(cell, expand) {
    let score = 0;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [dy, dx] of directions) {
      let y = cell.y;
      let x = cell.x;

      for (let step = 1; step < expand; step++) {
        y += dy;
        x += dx;

        if (!(0 <= y && y <= 9 && 0 <= x && x <= 9)) {
          break;
        }

        const neighborCell = this.opponent.map.value[y][x];

        if (neighborCell.isHit) {
          break;
        }

        score += 2 ** step;
      }
    }

    return score;
  }

  #getMaxShipSize(ships) {
    let maxSize = 1;

    for (const ship of ships) {
      if (!ship.isDead && ship.cells.length > maxSize) {
        maxSize = ship.cells.length;
      }
    }

    return maxSize;
  }
}

export default Computer;
