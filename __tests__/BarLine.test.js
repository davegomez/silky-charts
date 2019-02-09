import React from 'react';
import { BarLine } from '../src';
import { create } from 'react-test-renderer';
import { data, dataWidthDates } from '../__mocks__/barLine';
import createNodeMock from '../__mocks__/createNodeMock';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<BarLine data={data} />, {
    createNodeMock,
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with width', () => {
  const tree = create(<BarLine data={data} width={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with height', () => {
  const tree = create(<BarLine data={data} height={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width and height', () => {
  const tree = create(<BarLine data={data} width={400} height={300} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with x axis label', () => {
  const tree = create(<BarLine data={data} xAxisChartLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with y axis label', () => {
  const tree = create(<BarLine data={data} yAxisChartLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with dates as name', () => {
  const tree = create(<BarLine data={dataWidthDates} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with dates as name', () => {
  const tree = create(<BarLine data={dataWidthDates} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with only bars', () => {
  const tree = create(
    <BarLine data={data} stackedSeries={['apples', 'bananas']} />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with only lines', () => {
  const tree = create(
    <BarLine data={data} lineSeries={['cherries', 'dates']} />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with bars and lines', () => {
  const tree = create(
    <BarLine
      data={dataWidthDates}
      stackedSeries={['apples', 'bananas']}
      lineSeries={['cherries', 'dates']}
    />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with a different line type', () => {
  const tree = create(<BarLine data={data} lineType={'curveNatural'} />, {
    createNodeMock,
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine data={data} lineType={'curveBundle'} lineTypeOption={0.5} />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine data={data} lineType={'curveCardinalOpen'} lineTypeOption={10} />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine
      data={data}
      lineType={'curveCatmullRomOpen'}
      lineTypeOption={0.5}
    />,
    {
      createNodeMock,
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly width horizontal grid', () => {
  const tree = create(<BarLine data={data} grid />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width vertical grid', () => {
  const tree = create(<BarLine data={data} grid horizontal />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly X axis label rotation', () => {
  const tree = create(<BarLine data={data} xAxisLabelRotation />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});
