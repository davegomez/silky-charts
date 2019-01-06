import React from 'react';
import styled from 'styled-components';
import { Bar, BarLine } from './silky-charts';
import { dates, letters } from './data/bar';
import barLineData from './data/bar-line';
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
        data={letters}
        grid
        referenceLine
        // sourceLabel="Source: AWeber Reports"
        // titleLabel="Subscriptions during February 2018"
        // xAxisLabel="February 2018"
        // yAxisLabel="Subscribers"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      />

      <Bar
        data={dates}
        referenceLine
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
        lineType={'curveNatural'}
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
