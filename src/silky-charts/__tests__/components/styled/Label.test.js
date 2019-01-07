import React from 'react';
import { Label } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { MARGIN } from '../../../utils/constants';

test('render correctly for x axis', () => {
  const tree = create(
    <Label axis="x" margin={MARGIN} width={10} height={10} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly for y axis', () => {
  const tree = create(
    <Label axis="y" margin={MARGIN} width={10} height={10} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
