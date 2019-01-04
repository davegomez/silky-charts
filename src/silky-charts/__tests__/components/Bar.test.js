import React from 'react';
import { Bar } from '../../';
import { create } from 'react-test-renderer';
import { data, dataWidthDates } from '../../__mocks__/bar';
import 'jest-styled-components';

test('Should render correctly', () => {
  const tree = create(<Bar data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly with dates as name', () => {
  const tree = create(<Bar data={dataWidthDates} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly width horizontal grid', () => {
  const tree = create(<Bar data={data} grid />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly width vertical grid', () => {
  const tree = create(<Bar data={data} grid horizontal />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly X axis label rotation', () => {
  const tree = create(<Bar data={data} xAxisLabelRotation />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly showing the value on bars', () => {
  const tree = create(<Bar data={data} showValue />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly showing the value and divergence on bars', () => {
  const tree = create(<Bar data={data} showValue showDivergence />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should call onMouseEnter and update divergence on bars', () => {
  const handleOnMouseEnter = jest.fn();
  const renderer = create(
    <Bar
      data={data}
      onMouseEnter={handleOnMouseEnter}
      showValue
      showDivergence
    />
  );
  const instance = renderer.root;
  const bar = instance.findByProps({ className: 'data' }).children[0];

  bar.props.onMouseEnter({ target: { getAttribute: jest.fn(x => 1) } });
  expect(handleOnMouseEnter).toHaveBeenCalled();

  const tree = renderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should call onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();
  const renderer = create(
    <Bar data={data} onMouseLeave={handleOnMouseLeave} />
  );
  const instance = renderer.root;
  const bar = instance.findByProps({ className: 'data' }).children[0];

  bar.props.onMouseLeave();
  expect(handleOnMouseLeave).toHaveBeenCalled();
});
