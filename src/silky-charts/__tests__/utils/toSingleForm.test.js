import { toSingleForm } from '../../utils';

const data = [
  { name: 'name1', foo: 0, bar: 1 },
  { name: 'name2', foo: 2, bar: 3 },
  { name: 'name3', foo: 4, bar: 5 },
];

const expected = [
  { name: 'name1', series: 'foo', value: 0 },
  { name: 'name1', series: 'bar', value: 1 },
  { name: 'name2', series: 'foo', value: 2 },
  { name: 'name2', series: 'bar', value: 3 },
  { name: 'name3', series: 'foo', value: 4 },
  { name: 'name3', series: 'bar', value: 5 },
];

test('transform the array to a single form schema', () => {
  expect(toSingleForm(data)).toEqual(expected);
});
