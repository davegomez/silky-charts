import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import always from 'ramda/src/always';
import { StackedBarDatum } from '../../src/components';
import { buildStack } from '../../src/utils';
import 'jest-styled-components';

const stack = buildStack(['bar', 'baz']);
const series = stack([
  { name: 'foo', foo: 0, bar: 1, baz: 2, qux: 3 },
  { name: 'baz', foo: 4, bar: 5, baz: 6, qux: 7 },
]);

const fn = always(0);
const xScale = fn;
xScale.bandwidth = fn;

const props = {
  theme: 'monteCarlo',
  x: xScale,
  y: fn,
  width: 10,
  height: 10,
};

afterEach(cleanup);

test('StackedBarDatum', () => {
  const { container } = render(
    <svg>
      <StackedBarDatum {...props} series={series} />
    </svg>
  );

  // Test just one layer
  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('bar-layer')).toBe(true);

  // Test just one bar
  const rect = container.querySelector('rect');
  expect(rect).toMatchSnapshot();
  expect(rect.classList.contains('bar')).toBe(true);
});

test('StackedBarDatum:onClick', () => {
  const handleOnClick = jest.fn();
  const { container } = render(
    <svg>
      <StackedBarDatum {...props} series={series} onClick={handleOnClick} />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.click(rect, {});

  expect(handleOnClick).toHaveBeenCalled();
});

test('StackedBarDatum:onMouseEnter', () => {
  const handleOnMouseEnter = jest.fn();
  const { container } = render(
    <svg>
      <StackedBarDatum
        {...props}
        series={series}
        onMouseEnter={handleOnMouseEnter}
      />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.mouseEnter(rect, {});

  expect(handleOnMouseEnter).toHaveBeenCalled();
});

test('StackedBarDatum:onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();
  const { container } = render(
    <svg>
      <StackedBarDatum
        {...props}
        series={series}
        onMouseLeave={handleOnMouseLeave}
      />
    </svg>
  );

  const rect = container.querySelector('rect');
  fireEvent.mouseLeave(rect, {});

  expect(handleOnMouseLeave).toHaveBeenCalled();
});
