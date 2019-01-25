import { getSeries } from '../../src/utils';

test('return all the keys in the data object but "name" with 2 series', () => {
  const data = [
    { name: 'name01', series: 'foo', value: 2 },
    { name: 'name01', series: 'bar', value: 6 },
    { name: 'name02', series: 'foo', value: 0 },
    { name: 'name02', series: 'bar', value: 4 },
    { name: 'name03', series: 'foo', value: 4 },
    { name: 'name03', series: 'bar', value: 1 },
    { name: 'name04', series: 'foo', value: 1 },
    { name: 'name04', series: 'bar', value: 3 },
  ];

  expect(getSeries(data)).toEqual(['foo', 'bar']);
});

test('return all the keys in the data object but "name"', () => {
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

  expect(getSeries(data)).toEqual(['foo', 'bar', 'baz', 'qux']);
});
