import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Path } from '../../src/components';
import 'jest-styled-components';

const props = {
  chart: 'foo',
};

afterEach(cleanup);

test('Path:BarLine', () => {
  const { container } = render(
    <svg>
      <Path {...props} chart="bar-line" fillColor="rgb(0, 0, 0)" />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('bar-line')).toBe(true);
});

test('Path:StackedArea', () => {
  const { container } = render(
    <svg>
      <Path {...props} chart="stacked-area" strokeColor="rgb(255, 255, 255)" />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('stacked-area')).toBe(true);
});

test('Path:onClick', () => {
  const handleOnClick = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onClick={handleOnClick} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.click(path, {});

  expect(handleOnClick).toHaveBeenCalled();
});

test('Path:onMouseEnter', () => {
  const handleOnMouseEnter = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onMouseEnter={handleOnMouseEnter} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.mouseEnter(path, {});

  expect(handleOnMouseEnter).toHaveBeenCalled();
});

test('Path:onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onMouseLeave={handleOnMouseLeave} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.mouseLeave(path, {});

  expect(handleOnMouseLeave).toHaveBeenCalled();
});
