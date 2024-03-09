'use strict';
import attack from './/attack';

function computerHandler(rival) {
  let attackResult = true;
  while (attackResult && checkAliveShip(rival.ships)) {
    const cellsForAttack = getCellsForAttack(rival);
    if (!cellsForAttack.length) {
      let cellForAttack = getRandomPoint(rival);
      attackResult = attack(rival, cellForAttack.y, cellForAttack.x);
    } else {
      let cellForAttack = cellsForAttack[parseInt(Math.random() * cellsForAttack.length)];
      attackResult = attack(rival, cellForAttack.y, cellForAttack.x);
    }
  }
  return false;
}

function getRandomPoint(rival) {
  const points = rival.getUntouchedCells();
  const point = points[parseInt(Math.random() * points.length)];
  return point;
}

function getDamagedShipCells(ships) {
  let shipCells = [];
  for (const ship of ships) {
    if (!ship.isDead) {
      for (const cell of ship.cells) {
        if (cell.isHit) {
          shipCells.push(cell);
        }
      }
    }
  }
  return shipCells;
}

function getCellsAroundDamagedCell(cell, rivalMapValue) {
  let cellsAroundDamageCell = [];
  for (let y = cell.y - 1; y <= cell.y + 1; y++) {
    for (let x = cell.x - 1; x <= cell.x + 1; x++) {
      if (0 <= y && y <= 9 && 0 <= x && x <= 9) {
        if (!rivalMapValue[y][x].isHit) {
          cellsAroundDamageCell.push(rivalMapValue[y][x]);
        }
      }
    }
  }
  return cellsAroundDamageCell;
}

function getCellsForAttack(rival) {
  let cellsForAttack = [];
  const damagedShipCells = getDamagedShipCells(rival.ships);
  if (damagedShipCells.length) {
    for (const cell of damagedShipCells) {
      cellsForAttack = cellsForAttack.concat(getCellsAroundDamagedCell(cell, rival.map.value));
    }
  }
  return cellsForAttack;
}

function checkAliveShip(rivalShips) {
  let aliveShip = false;
  for (const ship of rivalShips) {
    if (!ship.isDead) {
      aliveShip = true;
      break;
    }
  }
  return aliveShip;
}

export default computerHandler;
