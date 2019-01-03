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

test('Should render correctly', () => {
  const tree = create(<Circle {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should call the event handler onClick', () => {
  const handleOnClick = jest.fn();
  const tree = create(<Circle onClick={handleOnClick} {...props} />).toJSON();

  tree.props.onClick();
  expect(handleOnClick).toHaveBeenCalled();
});

test('Should call the event handler onMouseOver', () => {
  const handleOnMouseOver = jest.fn();
  const tree = create(
    <Circle onMouseOver={handleOnMouseOver} {...props} />
  ).toJSON();

  tree.props.onMouseOver();
  expect(handleOnMouseOver).toHaveBeenCalled();
});
