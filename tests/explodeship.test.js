'use strict';

import Player from '@/game/models/player';
import { explodeShip } from '@/game/attack';

describe('Explode ship test', () => {
  test('correct number of live cells after hitting cells around all ships', () => {
    const player = new Player();

    for (let ship of player.ships) {
      explodeShip(player.map.value, ship);
    }

    const untouchedCellsCount = player.getUntouchedCells().length;
    const damagedCellsCount = countDamagedCells(player.map);

    expect(100 - damagedCellsCount).toEqual(untouchedCellsCount);
  });
});

function countDamagedCells(map) {
  let count = 0;

  for (let row of map.value) {
    for (let cell of row) {
      if (cell.isHit) {
        count++;
      }
    }
  }

  return count;
}
