/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { Bar, BarLine, StackedArea, toSeries } from 'silky-charts';
import { aapl, fruits, letters, transport } from './data/';
import Container from './components/Container';
import ChartContainer from './components/ChartContainer';
import 'normalize.css';
import './styles.css';

const App = () => (
  <Container>
    <ChartContainer>
      <Bar
        // aspectRatio="4:3"
        data={letters}
        dataSource="Unknown"
        // dateFormat="%B %d, %Y"
        grid
        // height="300"
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        // onClick={() => {}}
        // onMouseEnter={() => {}}
        // onMouseLeave={() => {}}
        responsive
        // theme="curiousBlue"
        // tooltip
        title="Placeholder Chart Title"
        // width={500}
        xAxisChartLabel="X axis label"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-65}
        // xAxisTicks={10}
        yAxisChartLabel="Y axis label"
        // yAxisTicks={10}
      />
    </ChartContainer>
  </Container>
);

export default App;
