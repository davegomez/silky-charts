import { getMousePosition } from '../../src/utils';

const screenCTM = { inverse: () => {} };
const svg = document.createElement('svg');
svg.createSVGPoint = () => ({
  x: 0,
  y: 0,
  matrixTransform: () => ({ x: 5, y: 5 }),
});
svg.getScreenCTM = () => screenCTM;

test('get mouse position coordinates', () => {
  expect(getMousePosition(svg, { clientX: 10, clientY: 10 })).toEqual([5, 5]);
});
