import React from 'react';
import { LineDatum } from '../../src/components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const xScale = jest.fn();
xScale.bandwidth = jest.fn();

const props = {
  color: 'rgb(0, 0, 0)',
  d: 'M0',
  xScale: xScale,
  yScale: jest.fn(),
};

test('render correctly', () => {
  const tree = create(
    <LineDatum data={[{ name: 'foo', value: 0 }]} {...props} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly width dates', () => {
  const tree = create(
    <LineDatum
      isDates
      data={[{ name: '2019-01-01T05:00:00.000Z', value: 0 }]}
      {...props}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
