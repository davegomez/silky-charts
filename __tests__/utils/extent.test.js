import { extent } from '../../src/utils';

test('return the min and max value in array', () => {
  const [min, max] = extent([5, 9, 3, 13, 17, 10]);
  expect(min).toEqual(3);
  expect(max).toEqual(17);
});

test('return the min and max value in array', () => {
  const [min, max] = extent(['a', 'h', 'X', '#', '5', 'r', 'O']);
  expect(min).toEqual('#');
  expect(max).toEqual('r');
});
