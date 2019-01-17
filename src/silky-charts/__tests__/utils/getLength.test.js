import { getLength } from '../../utils';

const data = [
  { name: 'name01', series: 'foo', value: 0 },
  { name: 'name01', series: 'bar', value: 1 },
  { name: 'name02', series: 'foo', value: 2 },
  { name: 'name02', series: 'bar', value: 3 },
  { name: 'name03', series: 'foo', value: 4 },
  { name: 'name03', series: 'bar', value: 5 },
];

test('returns the data length based on unique names', () => {
  expect(getLength(data)).toEqual(3);
});
