'use strict'

import Cell from "./cell.js"

export default class Map {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.map = this.createMap()
    }

    createMap() {
        const map = []

        for (let y = 0; y < this.width; y++) {
            const row = []

            for (let x = 0; x < this.height; x++) {
                const cell = new Cell(x, y)
                row.push(cell)
            }
            
            map.push(row)
        }

        return map
    }
}
