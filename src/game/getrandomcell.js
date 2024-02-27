'use strict';

export default function getRandomCell(player) {
  const cells = player.getUntouchedCells();
  const i = parseInt(Math.random() * cells.length);
  return cells[i];
}
