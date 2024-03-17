'use strict';

export function explodeCellDiagonals(map, cell) {
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

export function explodeShip(map, ship) {
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

export function attack(player, y, x) {
  const cell = player.map.value[y][x];
  cell.isHit = true;

  if (cell.type == 'sea') {
    return false;
  }

  const ship = player.shipPointers.get(cell);
  const map = player.map.value;

  ship.checkHealth();

  ship.isDead ? explodeShip(map, ship) : explodeCellDiagonals(map, cell);

  return true;
}

export default attack;
