import { getMaximumValues } from '../../utils';

const data = [
  { name: 'foo', foo: 2, bar: 6, baz: 3, qux: 1 },
  { name: 'bar', foo: 0, bar: 4, baz: 1, qux: 5 },
  { name: 'baz', foo: 4, bar: 1, baz: 5, qux: 2 },
  { name: 'qux', foo: 1, bar: 3, baz: 2, qux: 6 },
];

const testCases = [
  { testCase: [], expected: [2, 6, 3, 1, 0, 4, 1, 5, 4, 1, 5, 2, 1, 3, 2, 6] },
  { testCase: ['foo', 'bar'], expected: [8, 4, 5, 4, 3, 1, 1, 5, 5, 2, 2, 6] },
  { testCase: ['qux', 'bar'], expected: [7, 9, 3, 9, 2, 3, 0, 1, 4, 5, 1, 2] },
  { testCase: ['bar', 'baz', 'qux'], expected: [10, 10, 8, 11, 2, 0, 4, 1] },
  { testCase: ['foo', 'bar', 'baz', 'qux'], expected: [12, 10, 12, 12] },
];

test('return an array with the maximum values calculated', () => {
  testCases.map(({ testCase, expected }) =>
    expect(getMaximumValues(testCase, data)).toEqual(expected)
  );
});
