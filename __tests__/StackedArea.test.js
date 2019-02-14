import React from 'react';
import { StackedArea } from '../src';
import { create } from 'react-test-renderer';
import { data, dataWidthDates } from '../__mocks__/stackedArea';
import createNodeMock from '../__mocks__/createNodeMock';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<StackedArea data={data} />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width', () => {
  const tree = create(<StackedArea data={data} width={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with height', () => {
  const tree = create(<StackedArea data={data} height={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width and height', () => {
  const tree = create(<StackedArea data={data} width={400} height={300} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with x axis label', () => {
  const tree = create(<StackedArea data={data} xAxisChartLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with y axis label', () => {
  const tree = create(<StackedArea data={data} yAxisChartLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with dates as name', () => {
  const tree = create(<StackedArea data={dataWidthDates} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width horizontal grid', () => {
  const tree = create(<StackedArea data={data} grid />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width vertical grid', () => {
  const tree = create(<StackedArea data={data} grid horizontal />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly X axis label rotation', () => {
  const tree = create(<StackedArea data={data} xAxisLabelRotation />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});
