import { valueFor } from '../../utils';

test('Should return the correct value for the "x" option', () => {
  expect(valueFor('x', 840, 13)).toEqual(26.923076923076923);
  expect(valueFor('x', 560, 6)).toEqual(38.888888888888886);
  expect(valueFor('x', 675, 18)).toEqual(15.625);
});

test('Should return the correct value for the "width" option', () => {
  expect(valueFor('width', 840, 13)).toEqual(53.96758090318602);
  expect(valueFor('width', 560, 6)).toEqual(77.95317241571314);
  expect(valueFor('width', 675, 18)).toEqual(31.32047105988474);
});
