import { getLineDataForSeries } from '../../utils';

const data = [
  { name: 'name01', series: 'foo', value: 0 },
  { name: 'name01', series: 'bar', value: 2 },
  { name: 'name01', series: 'baz', value: 4 },
  { name: 'name01', series: 'qux', value: 6 },
  { name: 'name02', series: 'foo', value: 1 },
  { name: 'name02', series: 'bar', value: 3 },
  { name: 'name02', series: 'baz', value: 5 },
  { name: 'name02', series: 'qux', value: 7 },
];

test('return the data for the given keys', () => {
  expect(getLineDataForSeries(['bar', 'baz'], data)).toEqual([
    [
      { name: 'name01', series: 'bar', value: 2 },
      { name: 'name02', series: 'bar', value: 3 },
    ],
    [
      { name: 'name01', series: 'baz', value: 4 },
      { name: 'name02', series: 'baz', value: 5 },
    ],
  ]);
});
