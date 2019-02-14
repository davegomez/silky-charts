import { getBaseColor, palette } from '../../src/utils';

const { monteCarlo, vividCerise, sundown } = palette.themes;
const monteCarloColor = monteCarlo[0];
const vividCeriseColor = vividCerise[0];
const sundownColor = sundown[0];

test('return the correct color', () => {
  expect(getBaseColor('monteCarlo')).toEqual(monteCarloColor);
  expect(getBaseColor('vividCerise')).toEqual(vividCeriseColor);
  expect(getBaseColor('sundown')).toEqual(sundownColor);
});
