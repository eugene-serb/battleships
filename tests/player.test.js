'use strict';

import Player from '../src/battleships/player';

describe('Player class test', () => {
  test('Player loses when all ships is dead', () => {
    const player = new Player();

    for (let ship of player.ships) {
      ship.isDead = true;
    }

    expect(player.isLost()).toBe(true);
  });
});
