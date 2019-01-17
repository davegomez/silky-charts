import { getMaxValues } from '../../utils';

const data = [
  { name: 'name01', series: 'foo', value: 2 },
  { name: 'name01', series: 'bar', value: 6 },
  { name: 'name01', series: 'baz', value: 3 },
  { name: 'name01', series: 'qux', value: 1 },
  { name: 'name02', series: 'foo', value: 0 },
  { name: 'name02', series: 'bar', value: 4 },
  { name: 'name02', series: 'baz', value: 1 },
  { name: 'name02', series: 'qux', value: 5 },
  { name: 'name03', series: 'foo', value: 4 },
  { name: 'name03', series: 'bar', value: 1 },
  { name: 'name03', series: 'baz', value: 5 },
  { name: 'name03', series: 'qux', value: 2 },
  { name: 'name04', series: 'foo', value: 1 },
  { name: 'name04', series: 'bar', value: 3 },
  { name: 'name04', series: 'baz', value: 2 },
  { name: 'name04', series: 'qux', value: 6 },
];

test('return an array with the maximum values calculated', () => {
  expect(getMaxValues(data, [])).toEqual([12, 10, 12, 12]);
  expect(getMaxValues(data, ['foo', 'bar'])).toEqual([8, 4, 5, 4]);
  expect(getMaxValues(data, ['qux', 'bar'])).toEqual([7, 9, 3, 9]);
  expect(getMaxValues(data, ['bar', 'baz', 'qux'])).toEqual([10, 10, 8, 11]);
});
