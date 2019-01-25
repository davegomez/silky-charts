import { getMax } from '../../src/utils';

test('get the maximum value in the list', () => {
  expect(getMax([])).toEqual(0);
  expect(getMax([4, 8, 1, 3, 0, 7])).toEqual(8);
  expect(getMax([2, 7, 12, 9, 3, 6])).toEqual(12);
  expect(getMax([5, 10, 3, 0, 17])).toEqual(17);
  expect(getMax([6, 11, 9, 1, 7, 2])).toEqual(11);
});
