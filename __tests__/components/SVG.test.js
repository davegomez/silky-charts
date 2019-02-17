import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { SVG } from '../../src/components';
import 'jest-styled-components';

const props = {
  identifier: 'foo',
  ref: jest.fn(),
  size: { width: 10, height: 10 },
};

afterEach(cleanup);

test('SVG', () => {
  const { container } = render(<SVG {...props} />);

  const svg = container.firstChild;
  expect(svg).toMatchSnapshot();
  expect(svg.classList.contains('silky-charts')).toBe(true);
  expect(svg.id).toEqual('foo');
});
