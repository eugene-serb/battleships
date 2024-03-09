'use strict';

import Player from '@/game/models/player';
import Drawer from '@/game/drawer';
import attack from '@/game/attack';
import computerHandler from '@/game/computerHandler';
import { getMergedMap } from '@/game/utils/map';
import {
  USER_FIELD_ID_SELECTOR,
  RIVAL_FIELD_ID_SELECTOR,
  RESTART_BUTTON_ID_SELECTOR,
  TEXT_BANNER_ID_SELECTOR,
  PLAYER_WIN_TEXT,
  RIVAL_WIN_TEXT,
  DRAWER_CONFIG,
} from '@/game/constants/common';

class Gameloop {
  constructor() {
    this.#getDOM();
    this.#addEventListeners();
    this.#init();
    this.#draw();
  }

  #init() {
    this.textElement.textContent = '';

    this.endGame = false;

    this.player = new Player();
    this.opponent = new Player();

    this.userConfig = structuredClone(DRAWER_CONFIG);
    this.rivalConfig = structuredClone(DRAWER_CONFIG);

    this.rivalConfig[0].handle = this.#eventHandler.bind(this);

    this.playerDrawer = new Drawer(this.userField, this.userConfig);
    this.opponentDrawer = new Drawer(this.rivalField, this.rivalConfig);
  }

  #draw() {
    this.playerDrawer.draw(getMergedMap(this.player.map.value));
    this.opponentDrawer.draw(getMergedMap(this.opponent.map.value, true));
  }

  #restart() {
    this.#init();
    this.#draw();
  }

  #showText(text) {
    this.textElement.classList.add('win-text');
    this.textElement.textContent = text;
  }

  #checkEndgame() {
    if (!(this.player.isLost() || this.opponent.isLost())) {
      return;
    }

    const text = this.player.isLost() ? RIVAL_WIN_TEXT : PLAYER_WIN_TEXT;

    this.#showText(text);
  }

  #eventHandler(x, y) {
    if (this.endGame) {
      return;
    }

    const hit = attack(this.opponent, y, x);

    this.opponentDrawer.draw(getMergedMap(this.opponent.map.value, true));

    if (!hit) {
      computerHandler(this.player);
    }

    this.#checkEndgame();
    this.#draw();
  }

  #getDOM() {
    this.userField = document.getElementById(USER_FIELD_ID_SELECTOR);
    this.rivalField = document.getElementById(RIVAL_FIELD_ID_SELECTOR);
    this.textElement = document.getElementById(TEXT_BANNER_ID_SELECTOR);
    this.restartButton = document.getElementById(RESTART_BUTTON_ID_SELECTOR);
  }

  #addEventListeners() {
    this.restartButton.addEventListener('click', this.#restart.bind(this));
  }
}

export default Gameloop;
