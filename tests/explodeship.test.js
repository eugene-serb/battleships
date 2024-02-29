'use strict';

import explodeShip from '../src/game/explodeship';
import Player from '../src/game/player';

describe('Explode ship test', () => {
  test('correct number of live cells after hitting cells around all ships', () => {
    const player = new Player();

    for (let ship of player.ships) {
      explodeShip(player.map, ship);
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
