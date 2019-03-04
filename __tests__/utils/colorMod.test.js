import { colorMod } from '../../src/utils';

test('return a darken color', () => {
  const result = colorMod('rgb(120, 87, 18)');
  expect(result).toEqual('rgb(100, 67, 0)');
});

test('return a lighten color', () => {
  const result = colorMod('rgb(220, 87, 18)', 45);
  expect(result).toEqual('rgb(255, 132, 63)');
});
