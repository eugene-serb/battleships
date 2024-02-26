'use strict';

import Cell from '../src/battleships/cell';

describe('Cell test', () => {
  test('standart cell type is equal to sea', () => {
    const cell = new Cell(1, 1);
    expect(cell.type).toEqual('sea');
  });
});
