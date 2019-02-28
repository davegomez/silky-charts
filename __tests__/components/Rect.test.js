import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Rect } from '../../src/components';
import 'jest-styled-components';

const props = {
  chart: 'foo',
  fillColor: 'rgb(0, 0, 0)',
  position: { x: 0, y: 0 },
  size: { width: 10, height: 10 },
};

afterEach(cleanup);

test('Rect', () => {
  const { container } = render(
    <svg>
      <Rect {...props} />
    </svg>
  );

  const rect = container.querySelector('rect');
  expect(rect).toMatchSnapshot();
  expect(rect.classList.contains('foo')).toBe(true);
});

test('Rect:onClick', () => {
  const handleClick = jest.fn();

  const { container } = render(
    <svg>
      <Rect {...props} onClick={handleClick} />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.click(rect, {});

  expect(handleClick).toHaveBeenCalled();
});

test('Rect:onMouseEnter', () => {
  const handleMouseEnter = jest.fn();

  const { container } = render(
    <svg>
      <Rect {...props} onMouseEnter={handleMouseEnter} />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.mouseEnter(rect, {});

  expect(handleMouseEnter).toHaveBeenCalled();
});

test('Rect:onMouseLeave', () => {
  const handleMouseLeave = jest.fn();

  const { container } = render(
    <svg>
      <Rect {...props} onMouseLeave={handleMouseLeave} />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.mouseLeave(rect, {});

  expect(handleMouseLeave).toHaveBeenCalled();
});
