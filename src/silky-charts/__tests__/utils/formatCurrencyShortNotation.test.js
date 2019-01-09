import { formatCurrencyShortNotation } from '../../utils';

test('not format single digit values', () => {
  expect(formatCurrencyShortNotation(1)).toBe(1);
  expect(formatCurrencyShortNotation(-1)).toBe(-1);
});

test('not format double digit values', () => {
  expect(formatCurrencyShortNotation(12)).toBe(12);
  expect(formatCurrencyShortNotation(-12)).toBe(-12);
});

test('not format triple digit values', () => {
  expect(formatCurrencyShortNotation(123)).toBe(123);
  expect(formatCurrencyShortNotation(-123)).toBe(-123);
});

test('format thousand values as M', () => {
  expect(formatCurrencyShortNotation(1234)).toBe('1.2M');
  expect(formatCurrencyShortNotation(-1234)).toBe('-1.2M');
  expect(formatCurrencyShortNotation(12345)).toBe('12.3M');
  expect(formatCurrencyShortNotation(-12345)).toBe('-12.3M');
  expect(formatCurrencyShortNotation(123456)).toBe('123.5M');
  expect(formatCurrencyShortNotation(-123456)).toBe('-123.5M');
});

test('format million values as MM', () => {
  expect(formatCurrencyShortNotation(1234567)).toBe('1.2MM');
  expect(formatCurrencyShortNotation(-1234567)).toBe('-1.2MM');
  expect(formatCurrencyShortNotation(12345678)).toBe('12.3MM');
  expect(formatCurrencyShortNotation(-12345678)).toBe('-12.3MM');
  expect(formatCurrencyShortNotation(123456789)).toBe('123.5MM');
  expect(formatCurrencyShortNotation(-123456789)).toBe('-123.5MM');
});

test('not format billion values', () => {
  expect(formatCurrencyShortNotation(1234567890)).toBe(1234567890);
  expect(formatCurrencyShortNotation(-1234567890)).toBe(-1234567890);
});
