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
  const handleOnClick = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onClick={handleOnClick} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.click(circle, {});

  expect(handleOnClick).toHaveBeenCalled();
});

test('Circle:onMouseEnter', () => {
  const handleOnMouseEnter = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onMouseEnter={handleOnMouseEnter} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseEnter(circle, {});

  expect(handleOnMouseEnter).toHaveBeenCalled();
});

test('Circle:onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();

  const { container } = render(
    <svg>
      <Circle {...props} onMouseLeave={handleOnMouseLeave} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseLeave(circle, {});

  expect(handleOnMouseLeave).toHaveBeenCalled();
});
