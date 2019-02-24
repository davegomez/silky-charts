import { stack as d3Stack, stackOffsetNone, stackOrderNone } from 'd3-shape';

/**
 * The D3 stack function takes the list of the series in the chart data to
 * generate the stacks for the stacked charts.
 *
 * @param {Array} series List of series in the data.
 * @returns {Array} D3 stack.
 */
export default series =>
  d3Stack()
    .keys(series)
    .order(stackOrderNone)
    .offset(stackOffsetNone);
