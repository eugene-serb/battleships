'use strict';

import Player from './player';
import Drawer from './drawer';
import getMergedMap from './converter';
import attack from './attack';
import computerHandler from './computerHandler';

class Gameloop {
  constructor(userField, rivalField, restartButton, textElement, config) {
    this.userField = userField;
    this.rivalField = rivalField;
    this.textElement = textElement;
    this.config = config;

    restartButton.addEventListener('click', this.init.bind(this));
  }

  init() {
    this.#playerInit();
    this.#configInit();
    this.#drawerInit();

    this.textElement.textContent = '';
  }

  #playerInit() {
    this.player = new Player();
    this.opponent = new Player();
  }

  #configInit() {
    this.userConfig = structuredClone(this.config);
    this.rivalConfig = structuredClone(this.config);
    this.rivalConfig[0]['handle'] = this.eventHandler.bind(this);
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

  #showText(text) {
    this.textElement.classList.add('win-text');
    this.textElement.textContent = text;
  }

  checkEndgame() {
    if (!(this.player.isLost() || this.opponent.isLost())) {
      return;
    }

    let text = 'You ';
    this.player.isLost() ? (text += 'lose!') : (text += 'won!');
    this.#showText(text);

    delete this.rivalConfig[0]['handle'];
    this.draw();
  }

  eventHandler(x, y) {
    const hit = attack(this.opponent, y, x);

    this.OpponentDrawer.draw(getMergedMap(this.opponent.map.value, true));

    if (!hit) {
      computerHandler(this.player);
      this.draw();
    }

    this.checkEndgame();
  }
}

export default Gameloop;
