import { buildLine } from '../../utils';

const xScale = jest.fn();
const yScale = jest.fn();

test('Should return the D3 line function', () => {
  const result = buildLine(xScale, yScale, 'curveLinear');

  expect(typeof result).toBe('function');

  expect(typeof result.x).toBe('function');
  expect(typeof result.y).toBe('function');
  expect(typeof result.defined).toBe('function');
  expect(typeof result.curve).toBe('function');
  expect(typeof result.context).toBe('function');
});

test('Should return the D3 line function with option', () => {
  const result = buildLine(xScale, yScale, 'curveLinear', 0.5);

  expect(typeof result).toBe('function');

  expect(typeof result.x).toBe('function');
  expect(typeof result.y).toBe('function');
  expect(typeof result.defined).toBe('function');
  expect(typeof result.curve).toBe('function');
  expect(typeof result.context).toBe('function');
});
