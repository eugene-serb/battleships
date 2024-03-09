'use strict';

import Player from '@/game/models/player';
import computerHandler from '@/game/computerHandler';

describe('Computer attack test', () => {
  test('Last untouched one-cell ship hit', () => {
    const player = new Player();

    for (const row of player.map.value) {
      for (const cell of row) {
        if (cell.type == 'sea') {
          cell.isHit = true;
        }
      }
    }

    for (let i = 0; i < player.ships.length - 1; i++) {
      const ship = player.ships[i];
      ship.cells.forEach((cell) => (cell.isHit = true));
      ship.checkHealth();
    }

    let lastShip = player.ships.at(-1);

    computerHandler(player);

    expect(lastShip.isDead).toBe(true);
  });
});
