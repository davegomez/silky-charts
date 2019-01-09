import { getLineDataForKeys } from '../../utils';

const data = [
  { name: 'datum_00', foo: 0, bar: 1, baz: 2, qux: 3 },
  { name: 'datum_01', foo: 4, bar: 5, baz: 6, qux: 7 },
];

test('return the data for the given keys', () => {
  expect(getLineDataForKeys(['bar', 'baz'], data)).toEqual([
    [
      { key: 'bar', name: 'datum_00', value: 1 },
      { key: 'bar', name: 'datum_01', value: 5 },
    ],
    [
      { key: 'baz', name: 'datum_00', value: 2 },
      { key: 'baz', name: 'datum_01', value: 6 },
    ],
  ]);
});
