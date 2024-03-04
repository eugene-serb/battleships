'use strict';

import './style.css';

import Gameloop from '../../game/gameloop';

const config = {
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

const userField = document.getElementById('user-field');
const rivalField = document.getElementById('rival-field');
const restartButton = document.getElementById('restart');
const winText = document.getElementById('win-text');

const gameloop = new Gameloop(userField, rivalField, restartButton, winText, config);

gameloop.init();
