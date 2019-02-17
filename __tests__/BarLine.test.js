import React from 'react';
import { BarLine } from '../src';
import { render, cleanup } from 'react-testing-library';
import { data, dataWidthDates } from '../__mocks__/barLine';
import 'jest-styled-components';

const props = {
  data,
  lineSeries: ['cherries', 'dates'],
  stackedSeries: ['apples', 'bananas'],
};

afterEach(cleanup);

test('BarLine', () => {
  const { container } = render(<BarLine {...props} />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine with dates', () => {
  const { container } = render(<BarLine {...props} data={dataWidthDates} />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('Bar responsive', () => {
  const { container } = render(<BarLine {...props} responsive />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('Bar with width', () => {
  const { container } = render(<BarLine {...props} width={100} />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('Bar with height', () => {
  const { container } = render(<BarLine {...props} height={100} />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine width grid', () => {
  const { container } = render(<BarLine {...props} grid />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine with Title, X label, Y label', () => {
  const { container } = render(
    <BarLine
      {...props}
      title={'Test title'}
      xAxisChartLabel={'Test X label'}
      yAxisChartLabel={'Test Y label'}
    />
  );

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine with source', () => {
  const { container } = render(<BarLine {...props} dataSource="Test source" />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine with source link', () => {
  const { container } = render(
    <BarLine
      {...props}
      dataSource={{ href: '#', target: 'foo', title: 'barLine' }}
    />
  );

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});

test('BarLine with X label rotation', () => {
  const { container } = render(<BarLine {...props} xAxisLabelRotation />);

  const barLine = container.firstChild;
  expect(barLine).toMatchSnapshot();
});
