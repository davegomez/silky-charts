import { mapTooltipData } from '../../src/utils';

const data = [
  { name: 'foo', series: 'baz', value: 1 },
  { name: 'foo', series: 'qux', value: 2 },
  { name: 'bar', series: 'baz', value: 0 },
  { name: 'bar', series: 'qux', value: 3 },
];

const positions = [0, 10];

const result = {
  '0': [
    { name: 'foo', series: 'baz', value: 1 },
    { name: 'foo', series: 'qux', value: 2 },
  ],
  '10': [
    { name: 'bar', series: 'baz', value: 0 },
    { name: 'bar', series: 'qux', value: 3 },
  ],
};

test('map tooltip data', () => {
  expect(mapTooltipData(data, positions)).toEqual(result);
});
