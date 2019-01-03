import React from 'react';
import { LineDatum } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const props = {
  color: 'rgb(0, 0, 0)',
  d: 'M0',
  xScale: jest.fn(),
  yScale: jest.fn(),
};

test('Should render correctly', () => {
  const tree = create(
    <LineDatum data={[{ name: 'foo', value: 0 }]} {...props} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly width dates', () => {
  const tree = create(
    <LineDatum
      data={[{ name: '2019-01-01T05:00:00.000Z', value: 0 }]}
      {...props}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
