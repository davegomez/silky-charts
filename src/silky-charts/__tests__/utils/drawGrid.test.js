import { drawGrid } from '../../utils';

const xScale = jest.fn();
const yScale = jest.fn();

test('return an horizontal D3 axis constructor', () => {
  const result = drawGrid(true, xScale, 10, yScale, 10, 5);

  expect(typeof result).toBe('function');
  expect(typeof result.scale).toBe('function');
  expect(typeof result.ticks).toBe('function');
  expect(typeof result.tickArguments).toBe('function');
  expect(typeof result.tickValues).toBe('function');
  expect(typeof result.tickFormat).toBe('function');
  expect(typeof result.tickSize).toBe('function');
  expect(typeof result.tickSizeInner).toBe('function');
  expect(typeof result.tickSizeOuter).toBe('function');
  expect(typeof result.tickPadding).toBe('function');
});

test('return a vertical D3 axis constructor', () => {
  const result = drawGrid(false, xScale, 10, yScale, 10, 5);

  expect(typeof result).toBe('function');
  expect(typeof result.scale).toBe('function');
  expect(typeof result.ticks).toBe('function');
  expect(typeof result.tickArguments).toBe('function');
  expect(typeof result.tickValues).toBe('function');
  expect(typeof result.tickFormat).toBe('function');
  expect(typeof result.tickSize).toBe('function');
  expect(typeof result.tickSizeInner).toBe('function');
  expect(typeof result.tickSizeOuter).toBe('function');
  expect(typeof result.tickPadding).toBe('function');
});
