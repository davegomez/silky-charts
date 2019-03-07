import React from 'react';
import { Combination } from '../src';
import { render, cleanup } from 'react-testing-library';
import { data, dataWidthDates } from '../__mocks__/combination';
import 'jest-styled-components';

const props = {
  data,
  lineSeries: ['cherries', 'dates'],
  stackedSeries: ['apples', 'bananas'],
  visibleTicks: true,
};

afterEach(cleanup);

test('Combination', () => {
  const { container } = render(<Combination {...props} />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination with dates', () => {
  const { container } = render(
    <Combination {...props} data={dataWidthDates} />
  );

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Bar responsive', () => {
  const { container } = render(<Combination {...props} responsive />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Bar with width', () => {
  const { container } = render(<Combination {...props} width={100} />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Bar with height', () => {
  const { container } = render(<Combination {...props} height={100} />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination width grid', () => {
  const { container } = render(<Combination {...props} grid />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination with Title, X label, Y label', () => {
  const { container } = render(
    <Combination
      {...props}
      title={'Test title'}
      xAxisChartLabel={'Test X label'}
      yAxisChartLabel={'Test Y label'}
    />
  );

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination with source', () => {
  const { container } = render(
    <Combination {...props} dataSource="Test source" />
  );

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination with source link', () => {
  const { container } = render(
    <Combination
      {...props}
      dataSource={{ href: '#', target: 'foo', title: 'combination' }}
    />
  );

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});

test('Combination with X label rotation', () => {
  const { container } = render(<Combination {...props} xAxisLabelRotation />);

  const combination = container.firstChild;
  expect(combination).toMatchSnapshot();
});
