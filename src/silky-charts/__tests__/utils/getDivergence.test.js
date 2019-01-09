import { getDivergence } from '../../utils';

test('return possitive divergence values as string', () => {
  expect(getDivergence(60, 40)).toEqual('+20');
  expect(getDivergence(60, 40).includes('+')).toBe(true);

  expect(getDivergence(80, 50)).toEqual('+30');
  expect(getDivergence(80, 50).includes('+')).toBe(true);

  expect(getDivergence(10, 5)).toEqual('+5');
  expect(getDivergence(10, 5).includes('+')).toBe(true);
});

test('return negative divergence values as number', () => {
  expect(getDivergence(40, 60)).toEqual(-20);
  expect(getDivergence(50, 80)).toEqual(-30);
  expect(getDivergence(5, 10)).toEqual(-5);
});
