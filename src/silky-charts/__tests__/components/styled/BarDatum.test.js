jest.mock('react-dom');

import React from 'react';
import { BarDatum, Tooltip } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const props = {
  color: 'rgb(0, 0, 0)',
  datum: { name: 'foo', value: 0 },
  x: 0,
  y: 0,
  width: 10,
  height: 10,
};

test('render correctly', () => {
  const tree = create(<BarDatum {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly and show the value', () => {
  const tree = create(<BarDatum showValue {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('call the event handler onClick', () => {
  const handleOnClick = jest.fn();
  const tree = create(<BarDatum onClick={handleOnClick} {...props} />).toJSON();

  tree.props.onClick();
  expect(handleOnClick).toHaveBeenCalled();
});

test('call the event handler onMouseEnter', () => {
  const handleonMouseEnter = jest.fn();
  const tree = create(
    <BarDatum onMouseEnter={handleonMouseEnter} {...props} />
  ).toJSON();

  tree.props.onMouseEnter();
  expect(handleonMouseEnter).toHaveBeenCalled();
});

test('call the event handler onMouseLeave', () => {
  const handleonMouseLeave = jest.fn();
  const tree = create(
    <BarDatum onMouseLeave={handleonMouseLeave} {...props} />
  ).toJSON();

  tree.props.onMouseLeave();
  expect(handleonMouseLeave).toHaveBeenCalled();
});
