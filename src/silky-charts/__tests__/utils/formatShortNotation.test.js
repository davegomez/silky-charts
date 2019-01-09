import { formatShortNotation } from '../../utils';

test('not format single digit values', () => {
  expect(formatShortNotation(1)).toBe(1);
  expect(formatShortNotation(-1)).toBe(-1);
});

test('not format double digit values', () => {
  expect(formatShortNotation(12)).toBe(12);
  expect(formatShortNotation(-12)).toBe(-12);
});

test('format hundred values as Hecta', () => {
  expect(formatShortNotation(123)).toBe('1.2h');
  expect(formatShortNotation(-123)).toBe('-1.2h');
});

test('format thousand values as Kilo', () => {
  expect(formatShortNotation(1234)).toBe('1.2k');
  expect(formatShortNotation(-1234)).toBe('-1.2k');
  expect(formatShortNotation(12345)).toBe('12.3k');
  expect(formatShortNotation(-12345)).toBe('-12.3k');
  expect(formatShortNotation(123456)).toBe('123.5k');
  expect(formatShortNotation(-123456)).toBe('-123.5k');
});

test('format million values as Mega', () => {
  expect(formatShortNotation(1234567)).toBe('1.2M');
  expect(formatShortNotation(-1234567)).toBe('-1.2M');
  expect(formatShortNotation(12345678)).toBe('12.3M');
  expect(formatShortNotation(-12345678)).toBe('-12.3M');
  expect(formatShortNotation(123456789)).toBe('123.5M');
  expect(formatShortNotation(-123456789)).toBe('-123.5M');
});

test('format billion values as Giga', () => {
  expect(formatShortNotation(1234567890)).toBe('1.2G');
  expect(formatShortNotation(-1234567890)).toBe('-1.2G');
  expect(formatShortNotation(12345678901)).toBe('12.3G');
  expect(formatShortNotation(-12345678901)).toBe('-12.3G');
  expect(formatShortNotation(123456789012)).toBe('123.5G');
  expect(formatShortNotation(-123456789012)).toBe('-123.5G');
});

test('not format trillion values', () => {
  expect(formatShortNotation(1234567890123)).toBe(1234567890123);
});
