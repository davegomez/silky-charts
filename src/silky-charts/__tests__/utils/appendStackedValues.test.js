import { appendStackedValues } from '../../utils';

const data = [
  { name: 'name01', series: 'foo', value: 0 },
  { name: 'name01', series: 'bar', value: 1 },
  { name: 'name02', series: 'foo', value: 2 },
  { name: 'name02', series: 'bar', value: 3 },
  { name: 'name03', series: 'foo', value: 4 },
  { name: 'name03', series: 'bar', value: 5 },
];

const stack01 = [[0, 5], [0, 10], [0, 15]];
stack01.key = 'foo';

const stack02 = [[5, 20], [10, 20], [15, 20]];
stack02.key = 'bar';

const stack = [stack01, stack02];

const expected = [
  { name: 'name01', series: 'foo', stackedValues: [0, 5], value: 0 },
  { name: 'name01', series: 'bar', stackedValues: [5, 20], value: 1 },
  { name: 'name02', series: 'foo', stackedValues: [0, 10], value: 2 },
  { name: 'name02', series: 'bar', stackedValues: [10, 20], value: 3 },
  { name: 'name03', series: 'foo', stackedValues: [0, 15], value: 4 },
  { name: 'name03', series: 'bar', stackedValues: [15, 20], value: 5 },
];

test('modify objects appending their corresponding stacked values', () => {
  // The function call must mutate the data array, not return a new one
  appendStackedValues(stack, data);
  expect(data).toEqual(expected);

  // The function call should not modify the order of the elements
  data.forEach((datum, idx) => {
    expect(datum.value === expected[idx].value).toBe(true);
  });
});
