import { getBaseColor, palette } from '../../src/utils';

const { red, green, blue } = palette.themes;
const redColor = red.base[2];
const greenColor = green.base[2];
const blueColor = blue.base[2];

test('return the correct color', () => {
  expect(getBaseColor('red')).toEqual(redColor);
  expect(getBaseColor('green')).toEqual(greenColor);
  expect(getBaseColor('blue')).toEqual(blueColor);
});
