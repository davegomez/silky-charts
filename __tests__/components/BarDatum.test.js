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
  const handleOnClick = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onClick={handleOnClick} />
    </svg>
  );

  const barDatum = container.querySelector('svg').firstChild;
  fireEvent.click(barDatum, {});

  expect(handleOnClick).toHaveBeenCalled();
});

test('BarDatum:onMouseEnter show tooltip', () => {
  const handleOnMouseEnter = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onMouseEnter={handleOnMouseEnter} tooltip />
    </svg>
  );

  const svg = container.querySelector('svg');
  expect(svg).toMatchSnapshot();

  const barDatum = container.querySelector('svg').firstChild;
  fireEvent.mouseEnter(barDatum, {});

  expect(handleOnMouseEnter).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip.nodeName).toBe('DIV');
});

test('BarDatum:onMouseLeave hide tooltip', () => {
  const handleOnMouseLeave = jest.fn();
  const { container } = render(
    <svg>
      <BarDatum {...props} onMouseLeave={handleOnMouseLeave} tooltip />
    </svg>
  );

  const svg = container.querySelector('svg');
  expect(svg).toMatchSnapshot();

  const barDatum = container.querySelector('svg').firstChild;
  fireEvent.mouseLeave(barDatum, {});

  expect(handleOnMouseLeave).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip).toBe(null);
});
