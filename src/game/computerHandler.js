'use strict';
import attack from './/attack';

function computerHandler(rival) {
  let attackResult = true;
  while (attackResult) {
    const cellsForAttack = getCellsForAttack(rival);
    if (!cellsForAttack.length) {
      let cellForAttack = getRandomPoint(rival);
      attackResult = attack(rival, cellForAttack.y, cellForAttack.x);
    } else {
      let cellForAttack = cellsForAttack[parseInt(Math.random() * cellsForAttack.length)];
      console.log(cellForAttack.x);
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

function getCellsForAttack(rival) {
  let cellsForAttack = [];
  for (const ship of rival.ships) {
    if (!ship.isDead) {
      for (const shipCell of ship.cells) {
        if (shipCell.isHit) {
          for (let y = shipCell.y - 1; y <= shipCell.y + 1; y++) {
            for (let x = shipCell.x - 1; x <= shipCell.x + 1; x++) {
              if (0 <= y && y <= 9 && 0 <= x && x <= 9) {
                if (!rival.map.value[y][x].isHit) {
                  cellsForAttack.push(rival.map.value[y][x]);
                }
              }
            }
          }
        }
      }
    }
  }
  return cellsForAttack;
}
export default computerHandler;
