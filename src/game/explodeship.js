'use strict';

function explodeShip(map, ship) {
  for (const cell of ship.cells) {
    const x_max = Math.min(9, cell.x + 1);
    const y_max = Math.min(9, cell.y + 1);

    for (let y = Math.max(0, cell.y - 1); y <= y_max; y++) {
      for (let x = Math.max(0, cell.x - 1); x <= x_max; x++) {
        const cell = map.value[y][x];
        if (cell.type == 'sea') {
          cell.type = 'sea-hit';
          cell.isHit = true;
        }
      }
    }
  }
}

export default explodeShip;
