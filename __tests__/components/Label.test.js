import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Label } from '../../src/components';
import { MARGIN } from '../../src/utils/constants';
import 'jest-styled-components';

const props = {
  height: 10,
  margin: MARGIN,
  width: 10,
};

afterEach(cleanup);

test('Label:X', () => {
  const { container } = render(
    <svg>
      <Label axis="x" {...props} />
    </svg>
  );

  const label = container.querySelector('text');
  expect(label).toMatchSnapshot();
  expect(label.classList.contains('x-axis-label')).toBe(true);
});

test('Label:Y', () => {
  const { container } = render(
    <svg>
      <Label axis="y" {...props} />
    </svg>
  );

  const label = container.querySelector('text');
  expect(label).toMatchSnapshot();
  expect(label.classList.contains('y-axis-label')).toBe(true);
});
