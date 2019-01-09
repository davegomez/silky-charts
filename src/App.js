import React from 'react';
import styled from 'styled-components';
import { Bar, BarLine } from './silky-charts';
import { barData, barDates } from './data/bar';
import { barLineData, barLineDates } from './data/bar-line';
import 'normalize.css';

const App = styled.div`
  padding: 40px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
`;

export default () => (
  <App>
    <Container>
      <Bar
        data={barData}
        grid
        referenceLine
        margin={{ top: 40, right: 50, bottom: 70, left: 70 }}
        // sourceLabel="Source: AWeber Reports"
        // titleLabel="Subscriptions during February 2018"
        xAxisLabel="February 2018"
        yAxisLabel="Subscribers"
        // responsive
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      />

      <Bar
        data={barDates}
        referenceLine
        theme="green"
        // sourceLabel="Source: AWeber Reports"
        // titleLabel="Subscriptions during February 2018"
        // xAxisLabel="February 2018"
        // yAxisLabel="Subscribers"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      />

      <BarLine
        data={barLineData}
        grid
        stackedKeys={['apples', 'bananas']}
        lineKeys={['cherries']}
        lineType="curveNatural"
        // sourceLabel="Source: AWeber Reports"
        // titleLabel="Subscriptions during February 2018"
        // xAxisLabel="February 2018"
        // yAxisLabel="Subscribers"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      />

      <BarLine
        data={barLineDates}
        grid
        stackedKeys={['apples', 'cherries']}
        lineKeys={['bananas', 'dates']}
        theme="orange"
        secondaryTheme="purple"
        // sourceLabel="Source: AWeber Reports"
        // titleLabel="Subscriptions during February 2018"
        // xAxisLabel="February 2018"
        // yAxisLabel="Subscribers"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      />
    </Container>
  </App>
);
