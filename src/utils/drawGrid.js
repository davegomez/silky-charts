import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';

export default (
  horizontal,
  xScale,
  height,
  yScale,
  width,
  xAxisTicks,
  yAxisTicks
) =>
  horizontal
    ? d3AxisBottom()
        .scale(xScale)
        .tickSize(height, 0, 0)
        .ticks(xAxisTicks)
        .tickFormat('')
    : d3AxisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .ticks(yAxisTicks)
        .tickFormat('');
