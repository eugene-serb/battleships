'use strict';

import './style.css';

import Drawer from '@/battleships/drawer.js';

const userConfig = {
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

const computerConfig = {
  0: {
    class: 'cell sea',
    handle: handle,
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

const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function handle(x, y) {
  console.log('x', x);
  console.log('y', y);
}

let userField = document.getElementById('user-field');
let rivalField = document.getElementById('rival-field');

const userDrawer = new Drawer(userField, userConfig);
let rivalDrawer = new Drawer(rivalField, computerConfig);

userDrawer.draw(map);
rivalDrawer.draw(map);
