import { getMax } from '../../src/utils';

test('get the maximum value in the list of numbers', () => {
  expect(getMax([4, 8, 1, 3, 0, 7])).toEqual(8);
  expect(getMax([2, 7, 12, 9, 3, 6])).toEqual(12);
  expect(getMax([5, 10, 3, 13, 17])).toEqual(17);
  expect(getMax([6, 11, 9, 1, 7, 2])).toEqual(11);
});

test('get the maximum value in the list of strings', () => {
  expect(getMax(['h', '#', '5', 'O', '>'])).toEqual('h');
  expect(getMax(['K', '@', '-', 'e', '8'])).toEqual('e');
  expect(getMax(['p', 'W', '}', 'q', 'a'])).toEqual('}');
  expect(getMax(['4', 'd', 'K', '%', 'm'])).toEqual('m');
});

test('get the maximum value in the list of dates', () => {
  expect(
    getMax([
      '2001-01-30T04:00:00.000Z',
      '2013-08-19T04:00:00.000Z',
      '2009-02-14T04:00:00.000Z',
      '2018-06-06T04:00:00.000Z',
      '2015-12-12T04:00:00.000Z',
    ])
  ).toEqual('2018-06-06T04:00:00.000Z');
  expect(
    getMax([
      '1987-02-10T04:00:00.000Z',
      '1906-05-23T04:00:00.000Z',
      '1967-07-30T04:00:00.000Z',
      '1980-09-24T04:00:00.000Z',
      '2000-11-04T04:00:00.000Z',
    ])
  ).toEqual('2000-11-04T04:00:00.000Z');
});
