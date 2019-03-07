import React from 'react';
import { StackedArea } from '../src';
import { render, cleanup } from 'react-testing-library';
import { data } from '../__mocks__/stackedArea';
import 'jest-styled-components';

const props = {
  data,
  visibleTicks: true,
};

afterEach(cleanup);

test('StackedArea', () => {
  const { container } = render(<StackedArea {...props} />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea', () => {
  const { container } = render(<StackedArea {...props} responsive />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with width', () => {
  const { container } = render(<StackedArea {...props} width={100} />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with height', () => {
  const { container } = render(<StackedArea {...props} height={100} />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea width grid', () => {
  const { container } = render(<StackedArea {...props} grid />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with Title, X label, Y label', () => {
  const { container } = render(
    <StackedArea
      {...props}
      title={'Test title'}
      xAxisChartLabel={'Test X label'}
      yAxisChartLabel={'Test Y label'}
    />
  );

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with source', () => {
  const { container } = render(
    <StackedArea {...props} dataSource="Test source" />
  );

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with custom date format', () => {
  const { container } = render(
    <StackedArea {...props} dateFormat="%b %d, %Y" />
  );

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with source link', () => {
  const { container } = render(
    <StackedArea
      {...props}
      dataSource={{ href: '#', target: 'foo', title: 'stackedArea' }}
    />
  );

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});

test('StackedArea with X label rotation', () => {
  const { container } = render(<StackedArea {...props} xAxisLabelRotation />);

  const stackedArea = container.firstChild;
  expect(stackedArea).toMatchSnapshot();
});
