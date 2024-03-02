'use strict';

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
  const ship = findShip(player, y, x);

  if (ship) {
    for (const cell of ship.cells) {
      if (y === cell.y && x === cell.x) {
        cell.isHit = true;
        ship.checkHealth();
        return true;
      }
    }
  } else {
    player.map.value[y][x].isHit = true;
    return false;
  }
}

export default attack;
