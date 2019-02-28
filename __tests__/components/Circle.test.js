import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Circle } from '../../src/components';
import 'jest-styled-components';

const props = {
  chart: 'foo',
  color: 'rgb(0, 0, 0)',
};

afterEach(cleanup);

test('Circle', () => {
  const { container } = render(
    <svg>
      <Circle {...props} />
    </svg>
  );

  const circle = container.querySelector('circle');
  expect(circle).toMatchSnapshot();
  expect(circle.classList.contains('foo')).toBe(true);
});

test('Circle:onClick', () => {
  const handleClick = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onClick={handleClick} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.click(circle, {});

  expect(handleClick).toHaveBeenCalled();
});

test('Circle:onMouseEnter', () => {
  const handleMouseEnter = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onMouseEnter={handleMouseEnter} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseEnter(circle, {});

  expect(handleMouseEnter).toHaveBeenCalled();
});

test('Circle:onMouseLeave', () => {
  const handleMouseLeave = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onMouseLeave={handleMouseLeave} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseLeave(circle, {});

  expect(handleMouseLeave).toHaveBeenCalled();
});
