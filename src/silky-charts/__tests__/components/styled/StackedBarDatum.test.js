import React from 'react';
import { StackedBarDatum } from '../../../components/styled';
import { create } from 'react-test-renderer';
import { buildStack } from '../../../utils';
import 'jest-styled-components';

const stack = buildStack(['bar', 'baz']);

const series = stack([
  { name: 'foo', foo: 0, bar: 1, baz: 2, qux: 3 },
  { name: 'baz', foo: 4, bar: 5, baz: 6, qux: 7 },
]);

const seriesWithDate = stack([
  { name: '2019-01-01T05:00:00.000Z', foo: 0, bar: 1, baz: 2, qux: 3 },
  { name: '2019-01-02T05:00:00.000Z', foo: 4, bar: 5, baz: 6, qux: 7 },
]);

const xScale = jest.fn();
xScale.bandwidth = jest.fn();

const props = {
  theme: 'red',
  x: xScale,
  y: jest.fn(),
  width: 10,
  height: 10,
};

test('render correctly', () => {
  const tree = create(<StackedBarDatum series={series} {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('render correctly with date', () => {
  const tree = create(
    <StackedBarDatum
      series={seriesWithDate}
      data={[{ name: '2019-01-01', value: 0 }]}
      {...props}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
