import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { GraphContext } from '../../src/contexts';
import graphContext from '../../__mocks__/graphContext';
import { AreaDatum } from '../../src/components';
import 'jest-styled-components';

jest.mock('../../src/utils/getMousePosition', () => jest.fn(() => [0, 0]));
jest.mock('../../src/utils/getNearestPoint', () => jest.fn(() => 1));

const svg = document.createElement('svg');

const props = {
  area: jest.fn(),
  axis: 'foo',
  dataPositions: [0, 2, 4, 6],
  datum: [{ name: '09/24/1980', series: 'bar', value: 0 }],
  margin: { left: 0 },
  position: { x: 10, y: 10 },
  series: 'bar',
  svg,
  theme: 'monteCarlo',
  tooltipData: {
    0: [{ name: '09/24/1980', series: 'bar', value: 1 }],
    1: [{ name: '09/25/1980', series: 'baz', value: 2 }],
  },
};

afterEach(cleanup);

test('AreaDatum', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <AreaDatum {...props} />
      </svg>
    </GraphContext.Provider>
  );

  const area = container.querySelector('g');
  expect(area).toMatchSnapshot();
  expect(area.classList.contains('bar-layer')).toBe(true);
});

test('AreaDatum:onMouseEnter show tooltip', () => {
  const handleMouseEnter = jest.fn();

  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <AreaDatum {...props} onMouseEnter={handleMouseEnter} tooltip />
      </svg>
    </GraphContext.Provider>
  );

  const path = container.querySelector('path');
  fireEvent.mouseEnter(path, {});

  expect(handleMouseEnter).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip.nodeName).toBe('DIV');
});

test('AreaDatum:onMouseLeave hide tooltip', () => {
  const handleMouseLeave = jest.fn();

  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <AreaDatum {...props} onMouseLeave={handleMouseLeave} tooltip />
      </svg>
    </GraphContext.Provider>
  );

  const svg = container.querySelector('svg');
  expect(svg).toMatchSnapshot();

  const path = container.querySelector('path');
  fireEvent.mouseLeave(path, {});

  expect(handleMouseLeave).toHaveBeenCalled();

  const tooltip = document.querySelector('.silky-charts-tooltip');
  expect(tooltip).toBe(null);
});

test('AreaDatum:onMouseMove', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <AreaDatum {...props} tooltip />
      </svg>
    </GraphContext.Provider>
  );

  const path = container.querySelector('path');
  fireEvent.mouseMove(path, { clientX: 10, clientY: 10 });
});
