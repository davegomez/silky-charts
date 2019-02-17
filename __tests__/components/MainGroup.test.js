import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MainGroup } from '../../src/components';
import { MARGIN } from '../../src/utils/constants';
import 'jest-styled-components';

afterEach(cleanup);

test('MainGroup', () => {
  const { container } = render(
    <svg>
      <MainGroup margin={MARGIN} />
    </svg>
  );

  const group = container.querySelector('g');
  expect(group).toMatchSnapshot();
  expect(group.classList.contains('silky-charts-container')).toBe(true);
});
