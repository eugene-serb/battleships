'use strict';

export default function explodeShip(map, ship) {
  for (const cell of ship.cells) {
    let y = Math.max(0, cell.y - 1);

    const x_max = Math.min(9, cell.x + 1);
    const y_max = Math.min(9, cell.y + 1);

    for (y; y <= y_max; y++) {
      let x = Math.max(0, cell.x - 1);
      for (x; x <= x_max; x++) {
        const cell = map.map[y][x];
        if (cell.type == 'sea') {
          cell.type = 'sea-hit';
        }
      }
    }
  }
}
