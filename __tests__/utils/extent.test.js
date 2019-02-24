import { extent } from '../../src/utils';

test('return the min and max value in the numbers list', () => {
  const [min, max] = extent([5, 9, 3, 13, 17, 10]);
  expect(min).toEqual(3);
  expect(max).toEqual(17);
});

test('return the min and max value in the strings list', () => {
  const [min, max] = extent(['a', 'h', 'X', '#', '5', 'r', 'O']);
  expect(min).toEqual('#');
  expect(max).toEqual('r');
});

test('return the min and max value in the dates list', () => {
  const [min, max] = extent([
    '2001-01-30T04:00:00.000Z',
    '2013-08-19T04:00:00.000Z',
    '1987-02-10T04:00:00.000Z',
    '2009-02-14T04:00:00.000Z',
    '1906-05-23T04:00:00.000Z',
    '2018-06-06T04:00:00.000Z',
    '1967-07-30T04:00:00.000Z',
    '2015-12-12T04:00:00.000Z',
    '1980-09-24T04:00:00.000Z',
    '2000-11-04T04:00:00.000Z',
  ]);
  expect(min).toEqual('1906-05-23T04:00:00.000Z');
  expect(max).toEqual('2018-06-06T04:00:00.000Z');
});
