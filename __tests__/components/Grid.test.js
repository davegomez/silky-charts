import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Grid } from '../../src/components';
import 'jest-styled-components';

const props = {
  axis: 'foo',
  position: { x: 10, y: 10 },
};

afterEach(cleanup);

test('Grid', () => {
  const { container } = render(
    <svg>
      <Grid {...props} />
    </svg>
  );

  const grid = container.querySelector('g');
  expect(grid).toMatchSnapshot();
  expect(grid.classList.contains('grid')).toBe(true);
});
