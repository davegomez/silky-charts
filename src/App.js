import React from 'react';
import styled from 'styled-components';
import { Bar, BarLine } from './silky-charts';
import barData from './data/bar';
import barLineData from './data/bar-line';

const App = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Chart = styled.div`
  background-color: rgb(255, 255, 255);
  height: 540px;
  width: 960px;
`;

export default () => (
  <App>
    <Chart>
      <BarLine
        data={barLineData}
        grid
        referenceLine
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
    </Chart>
  </App>
);
