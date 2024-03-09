'use strict';

function explodeCellDiagonals(map, cell) {
  const diagonals = [1, -1];

  for (let dy of diagonals) {
    for (let dx of diagonals) {
      let y = cell.y + dy;
      let x = cell.x + dx;
      if (0 <= y && 0 <= x && y < 10 && x < 10) {
        const cell = map[y][x];
        cell.isHit = true;
      }
    }
  }
}

export default explodeCellDiagonals;
