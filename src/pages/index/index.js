'use strict';

import './style.css';

import Gameloop from '../../game/gameloop';

const userField = document.getElementById('user-field');
const rivalField = document.getElementById('rival-field');

const gameloop = new Gameloop(userField, rivalField);

gameloop.init();
