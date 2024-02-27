'use strict';

import './style.css';
import Drawer from '@/battleships/drawer.js'

const config = {
  0: {
    class: 'cell sea',
    handle: () => void{},
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
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function handle(e) {
  console.log(e)
}

let userField = document.getElementById("user-field");
let rivalField = document.getElementById("rival-field");

const userDrawer = new Drawer(userField, config);
let rivalDrawer = new Drawer(rivalField, config, handle);

userDrawer.draw(map);
rivalDrawer.draw(map);