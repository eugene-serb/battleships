'use strict';

import explodeCellDiagonals from './explodecelldiagonals';
import explodeShip from './explodeship';

function findShip(player, y, x) {
  for (const ship of player.ships) {
    if (!ship.isDead) {
      for (const cell of ship.cells) {
        if (y === cell.y && x === cell.x) {
          return ship;
        }
      }
    }
  }

  return null;
}

function attack(player, y, x) {
  const cell = player.map.value[y][x];
  cell.isHit = true;

  if (cell.type == 'sea') {
    return false;
  }

  const ship = findShip(player, y, x);
  const map = player.map.value;

  ship.checkHealth();

  ship.isDead ? explodeShip(map, ship) : explodeCellDiagonals(map, cell);

  return true;
}

export default attack;
