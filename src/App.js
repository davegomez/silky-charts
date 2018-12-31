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
      {/* <Bar
        data={barData}
        // showValue
        // showDivergence
        grid
        referenceLine
        source="Source: AWeber Reports"
        title="Subscriptions during February 2018"
        xAxisLabel="February 2018"
        yAxisLabel="Subscribers"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-50}
      /> */}

      <BarLine
        data={barLineData}
        // showValue
        // showDivergence
        // grid
        referenceLine
        stackedKeys={['apples', 'bananas', 'cherries', 'dates']}
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
