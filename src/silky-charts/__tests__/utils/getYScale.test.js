import { getYScale } from '../../utils';

const data = [
  { name: 'foo', value: 1 },
  { name: 'bar', value: 2 },
  { name: 'baz', value: 3 },
];

test('return a D3 linearScale constructor function', () => {
  const result = getYScale('linear', data, 100);

  expect(typeof result).toBe('function');
  expect(typeof result.invert).toBe('function');
  expect(typeof result.domain).toBe('function');
  expect(typeof result.range).toBe('function');
  expect(typeof result.rangeRound).toBe('function');
  expect(typeof result.clamp).toBe('function');
  expect(typeof result.interpolate).toBe('function');
  expect(typeof result.copy).toBe('function');
  expect(typeof result.ticks).toBe('function');
  expect(typeof result.tickFormat).toBe('function');
  expect(typeof result.nice).toBe('function');
});
