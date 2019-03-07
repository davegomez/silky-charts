import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Path } from '../../src/components';
import 'jest-styled-components';

const props = {
  chart: 'foo',
};

afterEach(cleanup);

test('Path:Combination', () => {
  const { container } = render(
    <svg>
      <Path {...props} chart="combination" fillColor="rgb(0, 0, 0)" />
    </svg>
  );

  const path = container.querySelector('path');
  expect(path).toMatchSnapshot();
  expect(path.classList.contains('combination')).toBe(true);
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
  const handleClick = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onClick={handleClick} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.click(path, {});

  expect(handleClick).toHaveBeenCalled();
});

test('Path:onMouseEnter', () => {
  const handleMouseEnter = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onMouseEnter={handleMouseEnter} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.mouseEnter(path, {});

  expect(handleMouseEnter).toHaveBeenCalled();
});

test('Path:onMouseLeave', () => {
  const handleMouseLeave = jest.fn();

  const { container } = render(
    <svg>
      <Path {...props} onMouseLeave={handleMouseLeave} />
    </svg>
  );

  const path = container.querySelector('path');
  fireEvent.mouseLeave(path, {});

  expect(handleMouseLeave).toHaveBeenCalled();
});
