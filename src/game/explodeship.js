'use strict';

function explodeShip(map, ship) {
  const indexes = [-1, 0, 1];

  for (const cell of ship.cells) {
    for (let dy of indexes) {
      for (let dx of indexes) {
        let y = cell.y + dy;
        let x = cell.x + dx;

        if (0 <= y && 0 <= x && y < 10 && x < 10 && map[y][x].type == 'sea') {
          map[y][x].isHit = true;
        }
      }
    }
  }
}

export default explodeShip;
