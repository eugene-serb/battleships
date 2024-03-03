'use strict';

import Player from './player';
import Drawer from './drawer';
import getMergedMap from './converter';
import attack from './attack';
// import getRandomCellCoord from './getrandomcellcoord';
import computerHandler from './computerHandler';

class Gameloop {
  constructor(userField, rivalField) {
    this.userField = userField;
    this.rivalField = rivalField;

    this.userConfig = {
      0: {
        class: 'cell sea',
      },
      1: {
        class: 'cell sea-hit',
      },
      2: {
        class: 'cell ship',
      },
      3: {
        class: 'cell ship-hit',
      },
    };

    this.rivalConfig = {
      0: {
        class: 'cell sea',
        handle: this.eventHandler.bind(this),
      },
      1: {
        class: 'cell sea-hit',
      },
      2: {
        class: 'cell ship',
      },
      3: {
        class: 'cell ship-hit',
      },
    };
  }

  init() {
    this.#playerInit();
    this.#drawerInit();
    this.draw();
  }

  #playerInit() {
    this.player = new Player();
    this.opponent = new Player();
  }

  #drawerInit() {
    this.PlayerDrawer = new Drawer(this.userField, this.userConfig);
    this.OpponentDrawer = new Drawer(this.rivalField, this.rivalConfig);
    this.draw();
  }

  draw() {
    this.PlayerDrawer.draw(getMergedMap(this.player.map.value));
    this.OpponentDrawer.draw(getMergedMap(this.opponent.map.value, true));
  }

  computerAttack() {
    let hit = true;
    while (hit) {
      const [y, x] = getRandomCellCoord(this.player);
      hit = attack(this.player, y, x);

    // computerHandler(this.player)
    //   this.draw();
    }
  

  eventHandler(x, y) {
    // console.log('2',this.player)
    const hit = attack(this.opponent, y, x);

    this.OpponentDrawer.draw(getMergedMap(this.opponent.map.value, true));

    if (!hit) {
      this.computerAttack();
    }
  }
}

export default Gameloop;
