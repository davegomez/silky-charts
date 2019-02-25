import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';

/**
 * Draw the chart's vertical or horizontal grid.
 *
 * @param {Boolean} horizontal Is the chart vertical or horizontal.
 * @param {Function} xScale D3 scale.
 * @param {Number} height Chart's available height.
 * @param {Function} yScale D3 scale.
 * @param {Number} width Chart's available width.
 * @param {Number} xAxisTicks Suggested value for the X axis ticks.
 * @param {Number} yAxisTicks Suggested value for the Y axis ticks.
 * @returns {Void}
 */
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
