import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { GraphContext } from '../../src/contexts';
import graphContext from '../../__mocks__/graphContext';
import d3Scale from '../../__mocks__/scale';
import { Axis } from '../../src/components';
import 'jest-styled-components';

/**
 * This file is also testing the d3Axis utility
 */

const props = {
  axis: 'foo',
  position: { x: 10, y: 10 },
  scale: d3Scale(),
};

afterEach(cleanup);

test('Axis:top', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <Axis {...props} orientation="top" />
      </svg>
    </GraphContext.Provider>
  );

  const axis = container.querySelector('g');
  expect(axis).toMatchSnapshot();
  expect(axis.classList.contains('axis-foo')).toBe(true);
});

test('Axis:right', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <Axis {...props} orientation="right" />
      </svg>
    </GraphContext.Provider>
  );

  const axis = container.querySelector('g');
  expect(axis).toMatchSnapshot();
  expect(axis.classList.contains('axis-foo')).toBe(true);
});

test('Axis:bottom', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <Axis {...props} orientation="bottom" />
      </svg>
    </GraphContext.Provider>
  );

  const axis = container.querySelector('g');
  expect(axis).toMatchSnapshot();
  expect(axis.classList.contains('axis-foo')).toBe(true);
});

test('Axis:left', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <svg>
        <Axis {...props} orientation="left" />
      </svg>
    </GraphContext.Provider>
  );

  const axis = container.querySelector('g');
  expect(axis).toMatchSnapshot();
  expect(axis.classList.contains('axis-foo')).toBe(true);
});
