'use strict'

import Map from "./map.js"
import Ship from "./ship.js"

export default class Player {
    constructor() {
        this.map = new Map(10, 10)
        this.ships = []
        this.cell_names = {
            'sea' : 0,
            'sea-hit' : 1,
            'ship' : 2,
            'ship-hit' : 3,
        }
    }

    

    createShip(y, x, size, orientation) {
        if (!this.validShipPosition(y, x, size, orientation)) {
            return false
        }

        let ship_cells = []

        for (let i = 0; i < size; i++) {
            let cell = this.map.map[y][x]
            cell.type = 'ship'
            ship_cells.push(cell)
            orientation ? y++ : x++
        }

        const ship = new Ship(ship_cells)
        this.ships.push(ship)

        return true
    }

    validShipPosition(y, x, size, orientation) {
        // orientation - 0 horizontal, 1 vertical
        const vertical_size = orientation ? size - 1 : 0
        const horizontal_size = orientation ? 0 : size - 1

        if (y + vertical_size > 9 || x + horizontal_size > 9) {
            return false
        }

        let left = Math.max(0, x - 1)
        const right = Math.min(x + 1 + horizontal_size, 9)

        let top = Math.max(0, y - 1)
        const bottom = Math.min(y + 1 + vertical_size, 9)

        for (top;top <= bottom; top++) {
            for (left; left <= right; left++) {
                const cell = this.map.map[top][left]
                if (cell.type != 'sea') {
                    return false
                }

            }
        }

        return true
    }
}