import { getSize } from '../../utils';
import { ASPECT_RATIO, MARGIN } from '../../utils/constants';

test('Should return the size with undefined width and height', () => {
  expect(getSize(undefined, undefined, MARGIN, ASPECT_RATIO)).toEqual({
    width: 540,
    height: 270,
  });
});

test('Should return the size with defined width and undefined height', () => {
  expect(getSize(800, undefined, MARGIN, ASPECT_RATIO)).toEqual({
    width: 700,
    height: 360,
  });
});

test('Should return the size with undefined width and defined height', () => {
  expect(getSize(undefined, 720, MARGIN, ASPECT_RATIO)).toEqual({
    width: 1180,
    height: 630,
  });
});

test('Should return the size with custom aspect ratio', () => {
  expect(getSize(undefined, undefined, MARGIN, '4:3')).toEqual({
    width: 540,
    height: 390,
  });
});

test('Should return the size with defined width and custom aspect ratio', () => {
  expect(getSize(800, undefined, MARGIN, '4:3')).toEqual({
    width: 700,
    height: 510,
  });
});

test('Should return the size with defined height and custom aspect ratio', () => {
  expect(getSize(undefined, 720, MARGIN, '4:3')).toEqual({
    width: 860,
    height: 630,
  });
});

test('Should return the size with defined width and height', () => {
  expect(getSize(1280, 720, MARGIN, '4:3')).toEqual({
    width: 1180,
    height: 630,
  });
});
