import { allDate } from '../../utils';

const withDate = [
  { foo: '2018-02-20', bar: 1 },
  { foo: '2018-03-20', bar: 2 },
  { foo: '2018-04-20', bar: 3 },
];

const withoutDate = [
  { foo: 'foo', bar: 1 },
  { foo: '2018-03-20', bar: 2 },
  { foo: '2018-04-20', bar: 3 },
];

test('be true if all values in array are instance of Date', () => {
  const isAllDate = allDate(withDate.map(({ foo }) => foo));
  expect(isAllDate).toBe(true);
});

test('be false if any value in array is not instance of Date', () => {
  const isAllDate = allDate(withoutDate.map(({ foo }) => foo));
  expect(isAllDate).toBe(false);
});
