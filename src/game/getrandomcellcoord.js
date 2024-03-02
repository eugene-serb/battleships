'use strict';

export default function getRandomCellCoord(player) {
  const cells = player.getUntouchedCells();
  const i = parseInt(Math.random() * cells.length);
  const cell = cells[i]
  
  return [cell.y, cell.x];
}
