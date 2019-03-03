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
      <StackedArea
        // aspectRatio="4:3"
        data={fruits}
        // dataSource="Unknown"
        // dateFormat="%B %d, %Y"
        // grid
        // height="300"
        // lineSeries={['Sold', 'Lost']}
        // lineType="curveCardinalOpen"
        // lineTypeOption={0.1}
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        // onClick={() => {}}
        // onMouseEnter={() => {}}
        // onMouseLeave={() => {}}
        // padding={1}
        responsive
        // secondaryTheme="madang"
        // stackedSeries={['Pear', 'Mango', 'Papaya']}
        // staticTooltip="top-left"
        // theme="curiousBlue"
        // title="Placeholder Chart Title"
        tooltip
        // width={500}
        // xAxisChartLabel="X axis label"
        // xAxisLabelRotation
        // xAxisLabelRotationValue={-65}
        // xAxisTicks={10}
        // yAxisChartLabel="Y axis label"
        // yAxisTicks={10}
      />
    </ChartContainer>
  </Container>
);

export default App;
