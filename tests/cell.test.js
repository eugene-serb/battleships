'use strict';

import Cell from '@/game/models/cell';

describe('Cell test', () => {
  test('Standard cell type is equal to sea', () => {
    const cell = new Cell(1, 1);
    expect(cell.type).toBe('sea');
  });
});
