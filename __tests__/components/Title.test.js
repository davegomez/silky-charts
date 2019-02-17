import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Title } from '../../src/components';
import { MARGIN } from '../../src/utils/constants';
import 'jest-styled-components';

const props = {
  margin: MARGIN,
  width: 100,
};

afterEach(cleanup);

test('Title', () => {
  const { container } = render(
    <svg>
      <Title {...props} />
    </svg>
  );

  const test = container.querySelector('text');
  expect(test).toMatchSnapshot();
  expect(test.classList.contains('chart-title')).toBe(true);
});
