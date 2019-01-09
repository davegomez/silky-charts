import React from 'react';
import { Bar } from '../../';
import { create } from 'react-test-renderer';
import { data, dataWidthDates } from '../../__mocks__/bar';
import createNodeMock from '../../__mocks__/createNodeMock';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<Bar data={data} />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width', () => {
  const tree = create(<Bar data={data} width={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with height', () => {
  const tree = create(<Bar data={data} height={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width and height', () => {
  const tree = create(<Bar data={data} width={400} height={300} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with x axis label', () => {
  const tree = create(<Bar data={data} xAxisLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with y axis label', () => {
  const tree = create(<Bar data={data} yAxisLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with dates as name', () => {
  const tree = create(<Bar data={dataWidthDates} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width horizontal grid', () => {
  const tree = create(<Bar data={data} grid />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width vertical grid', () => {
  const tree = create(<Bar data={data} grid horizontal />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly X axis label rotation', () => {
  const tree = create(<Bar data={data} xAxisLabelRotation />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly showing the value on bars', () => {
  const tree = create(<Bar data={data} showValue />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly showing the value and divergence on bars', () => {
  const tree = create(<Bar data={data} showValue showDivergence />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('call onMouseEnter and update divergence on bars', () => {
  const handleOnMouseEnter = jest.fn();
  const renderer = create(
    <Bar
      data={data}
      onMouseEnter={handleOnMouseEnter}
      showValue
      showDivergence
    />,
    {
      createNodeMock,
    }
  );
  const instance = renderer.root;
  const bar = instance.findByProps({ className: 'data' }).children[0];

  bar.props.onMouseEnter({ target: { getAttribute: jest.fn(x => 1) } });
  expect(handleOnMouseEnter).toHaveBeenCalled();

  const tree = renderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('call onMouseLeave', () => {
  const handleOnMouseLeave = jest.fn();
  const renderer = create(
    <Bar data={data} onMouseLeave={handleOnMouseLeave} />,
    {
      createNodeMock,
    }
  );
  const instance = renderer.root;
  const bar = instance.findByProps({ className: 'data' }).children[0];

  bar.props.onMouseLeave();
  expect(handleOnMouseLeave).toHaveBeenCalled();
});
