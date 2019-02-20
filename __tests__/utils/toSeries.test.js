import { toSeries } from '../../src/utils';

const data = {
  foo: { bar: 0, baz: 1, qux: 2 },
  bar: { bar: 3, baz: 4, qux: 5 },
  baz: { bar: 6, baz: 7, qux: 8 },
};

test('transform object to a list of objects based on series', () => {
  const expected = [
    { name: 'foo', series: 'bar', value: 0 },
    { name: 'foo', series: 'baz', value: 1 },
    { name: 'foo', series: 'qux', value: 2 },
    { name: 'bar', series: 'bar', value: 3 },
    { name: 'bar', series: 'baz', value: 4 },
    { name: 'bar', series: 'qux', value: 5 },
    { name: 'baz', series: 'bar', value: 6 },
    { name: 'baz', series: 'baz', value: 7 },
    { name: 'baz', series: 'qux', value: 8 },
  ];

  expect(toSeries(data)).toEqual(expected);
});

test('transform the object and omit the list of series passed', () => {
  const expected = [
    { name: 'foo', series: 'baz', value: 1 },
    { name: 'foo', series: 'qux', value: 2 },
    { name: 'bar', series: 'baz', value: 4 },
    { name: 'bar', series: 'qux', value: 5 },
    { name: 'baz', series: 'baz', value: 7 },
    { name: 'baz', series: 'qux', value: 8 },
  ];

  expect(toSeries(data, ['bar'])).toEqual(expected);
});
