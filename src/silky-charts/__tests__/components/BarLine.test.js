import React from 'react';
import { BarLine } from '../../';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { data, dataWidthDates } from '../../__mocks__/bar-line';

test('Should render correctly', () => {
  const tree = create(<BarLine data={data} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with dates as name', () => {
  const tree = create(<BarLine data={dataWidthDates} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly with only bars', () => {
  const tree = create(
    <BarLine data={data} stackedKeys={['apples', 'bananas']} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with only lines', () => {
  const tree = create(
    <BarLine data={data} lineKeys={['cherries', 'dates']} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with bars and lines', () => {
  const tree = create(
    <BarLine
      data={dataWidthDates}
      stackedKeys={['apples', 'bananas']}
      lineKeys={['cherries', 'dates']}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with a different line type', () => {
  const tree = create(
    <BarLine data={data} lineType={'curveNatural'} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine data={data} lineType={'curveBundle'} lineTypeOption={0.5} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine data={data} lineType={'curveCardinalOpen'} lineTypeOption={10} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly with curveBundle line type', () => {
  const tree = create(
    <BarLine
      data={data}
      lineType={'curveCatmullRomOpen'}
      lineTypeOption={0.5}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Should render correctly width horizontal grid', () => {
  const tree = create(<BarLine data={data} grid />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly width vertical grid', () => {
  const tree = create(<BarLine data={data} grid horizontal />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should render correctly X axis label rotation', () => {
  const tree = create(<BarLine data={data} xAxisLabelRotation />).toJSON();
  expect(tree).toMatchSnapshot();
});
