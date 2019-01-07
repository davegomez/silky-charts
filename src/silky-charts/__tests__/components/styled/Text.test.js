import React from 'react';
import { BarValue } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('Should render correctly', () => {
  const tree = create(
    <BarValue position={{ x: 0, y: 0 }} size={{ width: 10, height: 100 }}>
      foo
    </BarValue>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly for heights less than 40', () => {
  const tree = create(
    <BarValue position={{ x: 0, y: 0 }} size={{ width: 10, height: 20 }}>
      foo
    </BarValue>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
