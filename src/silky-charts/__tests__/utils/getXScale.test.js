import { getXScale } from '../../utils';

const data = [
  { name: 'foo', value: 1 },
  { name: 'bar', value: 2 },
  { name: 'baz', value: 3 },
];

const dataWithDates = [
  { name: '2018-02-20T05:00:00.000Z', value: 1 },
  { name: '2018-03-20T05:00:00.000Z', value: 2 },
  { name: '2018-04-20T05:00:00.000Z', value: 3 },
];

test('return a D3 bandScale constructor function', () => {
  const result = getXScale('band', data, 100);

  expect(typeof result).toBe('function');
  expect(typeof result.domain).toBe('function');
  expect(typeof result.range).toBe('function');
  expect(typeof result.copy).toBe('function');
  expect(typeof result.rangeRound).toBe('function');
  expect(typeof result.bandwidth).toBe('function');
  expect(typeof result.step).toBe('function');
  expect(typeof result.round).toBe('function');
  expect(typeof result.padding).toBe('function');
  expect(typeof result.paddingInner).toBe('function');
  expect(typeof result.paddingOuter).toBe('function');
  expect(typeof result.align).toBe('function');
});

test('return a D3 timeScale constructor function', () => {
  const result = getXScale('time', data, 100);

  expect(typeof result).toBe('function');
  expect(typeof result.invert).toBe('function');
  expect(typeof result.domain).toBe('function');
  expect(typeof result.range).toBe('function');
  expect(typeof result.rangeRound).toBe('function');
  expect(typeof result.clamp).toBe('function');
  expect(typeof result.interpolate).toBe('function');
  expect(typeof result.ticks).toBe('function');
  expect(typeof result.tickFormat).toBe('function');
  expect(typeof result.nice).toBe('function');
  expect(typeof result.copy).toBe('function');
});

test('return a D3 timeScale constructor function for bar charts', () => {
  const result = getXScale('time', data, 100, true);

  expect(typeof result).toBe('function');
  expect(typeof result.invert).toBe('function');
  expect(typeof result.domain).toBe('function');
  expect(typeof result.range).toBe('function');
  expect(typeof result.rangeRound).toBe('function');
  expect(typeof result.clamp).toBe('function');
  expect(typeof result.interpolate).toBe('function');
  expect(typeof result.ticks).toBe('function');
  expect(typeof result.tickFormat).toBe('function');
  expect(typeof result.nice).toBe('function');
  expect(typeof result.copy).toBe('function');
});
