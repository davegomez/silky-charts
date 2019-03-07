import React from 'react';
import { Bar } from '../src';
import { render, cleanup } from 'react-testing-library';
import { data, dataWidthDates } from '../__mocks__/bar';
import 'jest-styled-components';

const props = {
  visibleTicks: true,
};

afterEach(cleanup);

test('Bar', () => {
  const { container } = render(<Bar {...props} data={data} />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with dates', () => {
  const { container } = render(<Bar {...props} data={dataWidthDates} />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar responsive', () => {
  const { container } = render(<Bar {...props} data={data} responsive />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with width', () => {
  const { container } = render(<Bar {...props} data={data} width={100} />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with height', () => {
  const { container } = render(<Bar {...props} data={data} height={100} />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar width grid', () => {
  const { container } = render(<Bar {...props} data={data} grid />);

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with Title, X label, Y label', () => {
  const { container } = render(
    <Bar
      {...props}
      data={data}
      title={'Test title'}
      xAxisChartLabel={'Test X label'}
      yAxisChartLabel={'Test Y label'}
    />
  );

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with source', () => {
  const { container } = render(
    <Bar {...props} data={data} dataSource="Test source" />
  );

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with source link', () => {
  const { container } = render(
    <Bar
      {...props}
      data={data}
      dataSource={{ href: '#', target: 'foo', title: 'bar' }}
    />
  );

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});

test('Bar with X label rotation', () => {
  const { container } = render(
    <Bar {...props} data={data} xAxisLabelRotation />
  );

  const bar = container.firstChild;
  expect(bar).toMatchSnapshot();
});
