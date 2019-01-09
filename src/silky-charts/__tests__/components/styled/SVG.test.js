import React from 'react';
import { SVG } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('render correctly', () => {
  const ref = jest.fn();
  const tree = create(
    <SVG identifier="foo" size={{ width: 10, height: 10 }} ref={ref} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
