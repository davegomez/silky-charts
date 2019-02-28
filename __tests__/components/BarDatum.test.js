import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { BarDatum } from '../../src/components';
import 'jest-styled-components';

const props = {
  color: 'rgb(0, 0, 0)',
  datum: { name: 'foo', value: 0 },
  x: 0,
  y: 0,
  width: 10,
  height: 10,
};

afterEach(cleanup);

test('BarDatum', () => {
  const { container } = render(
    <svg>
      <BarDatum {...props} />
    </svg>
  );

  const barDatum = container.querySelector('svg').firstChild;
  expect(barDatum).toMatchSnapshot();
  expect(barDatum.nodeName).toBe('rect');
  expect(barDatum.classList.contains('bar')).toBe(true);
});

test('BarDatum:onClick', () => {
  const handleClick = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onClick={handleClick} />
    </svg>
  );

  const barDatum = container.querySelector('svg').firstChild;
  fireEvent.click(barDatum, {});

  expect(handleClick).toHaveBeenCalled();
});

test('BarDatum:onMouseEnter show tooltip', () => {
  const handleMouseEnter = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onMouseEnter={handleMouseEnter} tooltip />
    </svg>
  );

  const svg = container.querySelector('svg');
  expect(svg).toMatchSnapshot();

  const rect = container.querySelector('rect');
  fireEvent.mouseEnter(rect, {});

  expect(handleMouseEnter).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip.nodeName).toBe('DIV');
});

test('BarDatum:onMouseLeave hide tooltip', () => {
  const handleMouseLeave = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onMouseLeave={handleMouseLeave} tooltip />
    </svg>
  );

  const svg = container.querySelector('svg');
  expect(svg).toMatchSnapshot();

  const rect = container.querySelector('rect');
  fireEvent.mouseLeave(rect, {});

  expect(handleMouseLeave).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip).toBe(null);
});

test('BarDatum:onMouseMove', () => {
  const { container } = render(
    <svg>
      <BarDatum {...props} tooltip />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.mouseMove(rect, { clientX: 10, clientY: 10 });
});
