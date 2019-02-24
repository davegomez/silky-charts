import { getMin } from '../../src/utils';

test('get the maximum value in the list of numbers', () => {
  expect(getMin([4, 8, 1, 3, 0, 7])).toEqual(0);
  expect(getMin([2, 7, 12, 9, 3, 6])).toEqual(2);
  expect(getMin([5, 10, 3, 13, 17])).toEqual(3);
  expect(getMin([6, 11, 9, 1, 7, 2])).toEqual(1);
});

test('get the maximum value in the list of strings', () => {
  expect(getMin(['h', '#', '5', 'O', '>'])).toEqual('#');
  expect(getMin(['K', '@', '-', 'e', '8'])).toEqual('-');
  expect(getMin(['p', 'W', '}', 'q', 'a'])).toEqual('W');
  expect(getMin(['4', 'd', 'K', '%', 'm'])).toEqual('%');
});

test('get the maximum value in the list of dates', () => {
  expect(
    getMin([
      '2001-01-30T04:00:00.000Z',
      '2013-08-19T04:00:00.000Z',
      '2009-02-14T04:00:00.000Z',
      '2018-06-06T04:00:00.000Z',
      '2015-12-12T04:00:00.000Z',
    ])
  ).toEqual('2001-01-30T04:00:00.000Z');
  expect(
    getMin([
      '1987-02-10T04:00:00.000Z',
      '1906-05-23T04:00:00.000Z',
      '1967-07-30T04:00:00.000Z',
      '1980-09-24T04:00:00.000Z',
      '2000-11-04T04:00:00.000Z',
    ])
  ).toEqual('1906-05-23T04:00:00.000Z');
});
