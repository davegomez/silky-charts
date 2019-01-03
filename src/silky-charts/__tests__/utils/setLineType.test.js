import { setLineType } from '../../utils';

test('Should return undefined if empty|wrong line type is passed', () => {
  expect(setLineType()).toBeUndefined();
  expect(setLineType('foo')).toBeUndefined();
});

test('Should return the generator function', () => {
  expect(typeof setLineType('curveLinear')).toEqual('function');
  expect(typeof setLineType('curveLinearClosed')).toEqual('function');
});

test('Should return the generator function with option', () => {
  const curveBundle = setLineType('curveBundle', 0.5);
  expect(typeof curveBundle).toEqual('function');
  expect(curveBundle.beta).toBeDefined();

  const curveCardinalOpen = setLineType('curveCardinalOpen', 10);
  expect(typeof curveCardinalOpen).toEqual('function');
  expect(curveCardinalOpen.tension).toBeDefined();

  const curveCatmullRomOpen = setLineType('curveCatmullRomOpen', 0.5);
  expect(typeof curveCatmullRomOpen).toEqual('function');
  expect(curveCatmullRomOpen.alpha).toBeDefined();
});
