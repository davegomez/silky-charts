import { getNearestPoint } from '../../src/utils';

test('get the nearest dataset point according to the mouse position', () => {
  expect(getNearestPoint(6, 5, [0, 4, 8, 12])).toEqual(0);
  expect(getNearestPoint(10, 5, [0, 4, 8, 12])).toEqual(4);
  expect(getNearestPoint(12, 5, [0, 4, 8, 12])).toEqual(8);
});
