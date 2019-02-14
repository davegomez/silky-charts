/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { Bar, BarLine, StackedArea } from 'silky-charts';
import { letters, aapl, webServers, fruits } from './data';
import Container from './components/Container';
import ChartContainer from './components/ChartContainer';
import 'normalize.css';
import './styles.css';

const App = () => (
  <Container>
    <ChartContainer>
      <BarLine
        // aspectRatio="4:3"
        data={fruits}
        // dateFormat="%b %d, %Y"
        grid
        // height="300"
        lineSeries={['Sold', 'Lost']}
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        // onClick={() => {}}
        // onMouseEnter={() => {}}
        // onMouseLeave={() => {}}
        // padding={2}
        responsive
        // theme="curiousBlue"
        sourceLabel="Unknown"
        stackedSeries={['Pear', 'Mango', 'Papaya']}
        title="Placeholder Chart Title"
        tooltip
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
