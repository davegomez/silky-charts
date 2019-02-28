import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import always from 'ramda/src/always';
import { LineDatum } from '../../src/components';
import 'jest-styled-components';

const fn = always(0);
const xScale = fn;
xScale.bandwidth = fn;

const props = {
  chart: 'foo',
  color: 'rgb(0, 0, 0)',
  d: 'M0',
  data: [{ name: 'foo', value: 0 }],
  position: { x: 10, y: 10 },
  xScale: xScale,
  yScale: fn,
};

afterEach(cleanup);

test('LineDatum', () => {
  const { container } = render(
    <svg>
      <LineDatum {...props} />
    </svg>
  );

  const path = container.querySelector('path');

  expect(path).toMatchSnapshot();
  expect(path.classList.contains('line-path')).toBe(true);
  expect(path.classList.contains('foo')).toBe(true);

  const g = container.querySelector('.line-dot-group');
  expect(g).toMatchSnapshot();

  const circle = container.querySelector('circle');
  expect(circle).toMatchSnapshot();
  expect(circle.classList.contains('foo')).toBe(true);
});

test('LineDatum:onClick', () => {
  const handleClick = jest.fn();
  const { container } = render(
    <svg>
      <LineDatum {...props} onClick={handleClick} />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.click(circle, {});

  expect(handleClick).toHaveBeenCalled();
});

test('LineDatum:onMouseEnter show tooltip', () => {
  const handleMouseEnter = jest.fn();
  const { container } = render(
    <svg>
      <LineDatum {...props} onMouseEnter={handleMouseEnter} tooltip />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseEnter(circle, {});

  expect(handleMouseEnter).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip.nodeName).toBe('DIV');
});

test('LineDatum:onMouseLeave show tooltip', () => {
  const handleMouseLeave = jest.fn();
  const { container } = render(
    <svg>
      <LineDatum {...props} onMouseLeave={handleMouseLeave} tooltip />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseLeave(circle, {});

  expect(handleMouseLeave).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip).toBe(null);
});

test('LineDatum:onMouseMove', () => {
  const { container } = render(
    <svg>
      <LineDatum {...props} tooltip />
    </svg>
  );

  const circle = container.querySelector('circle');
  fireEvent.mouseMove(circle, { pageX: 10, pageY: 10 });
});
