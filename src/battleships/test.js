'use strict'

import Ship from "./ship.js"
import Map from "./map.js"
import Cell from "./cell.js"
import Player from "./player.js"

function drawBoard(map) {
    for (const row of map) {
        console.log(row.map((cell) => cell.type))
    }
}

let player = new Player()

let pos = player.validShipPosition(6,6,5,0)

console.log(pos)