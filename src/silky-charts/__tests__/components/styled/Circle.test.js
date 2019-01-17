import React from 'react';
import { Circle } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const props = {
  color: 'rgb(0, 0, 0)',
  cx: 0,
  cy: 0,
  r: 10,
};

test('render correctly', () => {
  const tree = create(<Circle {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('call the event handler onClick', () => {
  const handleOnClick = jest.fn();
  const tree = create(<Circle onClick={handleOnClick} {...props} />).toJSON();

  tree.props.onClick();
  expect(handleOnClick).toHaveBeenCalled();
});

test('call the event handler onMouseEnter', () => {
  const handleOnMouseEnter = jest.fn();
  const tree = create(
    <Circle onMouseEnter={handleOnMouseEnter} {...props} />
  ).toJSON();

  tree.props.onMouseEnter();
  expect(handleOnMouseEnter).toHaveBeenCalled();
});

test('call the event handler onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();
  const tree = create(
    <Circle onMouseLeave={handleOnMouseLeave} {...props} />
  ).toJSON();

  tree.props.onMouseLeave();
  expect(handleOnMouseLeave).toHaveBeenCalled();
});
