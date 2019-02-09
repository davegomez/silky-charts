import React from 'react';
import { Path } from '../../src/components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<Path color="rgb(0, 0, 0)" />).toJSON();

  expect(tree).toMatchSnapshot();
});