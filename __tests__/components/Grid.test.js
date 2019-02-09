import React from 'react';
import { Grid } from '../../src/components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('render correctly', () => {
  const ref = jest.fn();
  const tree = create(<Grid ref={ref} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(ref).toHaveBeenCalled();
});