import React from 'react';
import { Tooltip } from '../../src/components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<Tooltip pageX={10} pageY={10} />).toJSON();

  expect(tree).toMatchSnapshot();
});
