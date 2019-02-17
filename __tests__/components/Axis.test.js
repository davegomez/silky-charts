import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Axis } from '../../src/components';
import 'jest-styled-components';

const props = {
  axis: 'foo',
  position: { x: 10, y: 10 },
};

afterEach(cleanup);

test('Axis', () => {
  const { container } = render(
    <svg>
      <Axis {...props} />
    </svg>
  );

  const axis = container.querySelector('g');
  expect(axis).toMatchSnapshot();
  expect(axis.classList.contains('axis-foo')).toBe(true);
});
