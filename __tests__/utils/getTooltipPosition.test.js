import { getTooltipPosition } from '../../src/utils';

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const mousePosition = { pageX: 10, pageY: 10 };
const size = { width: 100, height: 70 };
const node = {
  getBoundingClientRect: jest.fn(() => ({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  })),
};

test('get the default tooltip position', () => {
  expect(getTooltipPosition(node, margin, mousePosition, size)).toEqual({
    left: -40,
    top: -76,
  });
});

test('get the top left tooltip position', () => {
  expect(
    getTooltipPosition(node, margin, mousePosition, size, 'top-left')
  ).toEqual({ left: 40, top: 40 });
});

test('get the top right tooltip position', () => {
  expect(
    getTooltipPosition(node, margin, mousePosition, size, 'top-right')
  ).toEqual({ left: -120, top: 40 });
});

test('get the bottom right tooltip position', () => {
  expect(
    getTooltipPosition(node, margin, mousePosition, size, 'bottom-right')
  ).toEqual({ left: -120, top: -90 });
});

test('get the bottom left tooltip position', () => {
  expect(
    getTooltipPosition(node, margin, mousePosition, size, 'bottom-left')
  ).toEqual({ left: 40, top: -90 });
});
