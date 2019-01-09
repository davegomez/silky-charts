import React from 'react';
import { Axis } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('render correctly', () => {
  const ref = jest.fn();
  const tree = create(
    <Axis axis="foo" position={{ x: 0, y: 0 }} ref={ref} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect(ref).toHaveBeenCalled();
});
