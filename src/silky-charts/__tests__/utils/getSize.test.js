import { getSize } from '../../utils';

const tests = [
  {
    result: getSize(1024, 576, { top: 10, right: 20, bottom: 20, left: 30 }),
    expected: [974, 546],
  },
  {
    result: getSize(1280, 720, { top: 40, right: 30, bottom: 10, left: 20 }),
    expected: [1230, 670],
  },
  {
    result: getSize(3840, 2160, { top: 20, right: 40, bottom: 15, left: 60 }),
    expected: [3740, 2125],
  },
];

test('should return the correct width and height', () => {
  tests.map(({ result, expected }) => expect(result).toEqual(expected));
});
