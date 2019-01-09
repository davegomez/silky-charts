import React from 'react';
import { Rect } from '../../../components/styled';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const props = {
  chart: 'foo',
  color: 'rgb(0, 0, 0)',
  position: { x: 0, y: 0 },
  size: { width: 10, height: 10 },
};

test('render correctly', () => {
  const tree = create(<Rect {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('call the event handler onClick', () => {
  const handleOnClick = jest.fn();
  const tree = create(<Rect onClick={handleOnClick} {...props} />).toJSON();

  tree.props.onClick();
  expect(handleOnClick).toHaveBeenCalled();
});

test('call the event handler onMouseEnter', () => {
  const handleOnMouseEnter = jest.fn();
  const tree = create(
    <Rect onMouseEnter={handleOnMouseEnter} {...props} />
  ).toJSON();

  tree.props.onMouseEnter();
  expect(handleOnMouseEnter).toHaveBeenCalled();
});

test('call the event handler onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();
  const tree = create(
    <Rect onMouseLeave={handleOnMouseLeave} {...props} />
  ).toJSON();

  tree.props.onMouseLeave();
  expect(handleOnMouseLeave).toHaveBeenCalled();
});
