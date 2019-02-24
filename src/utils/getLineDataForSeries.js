/**
 * Filter the data for the series selected to be represented as lines in the
 * chart.
 *
 * @param {Array} series List of series to filter form the chart data.
 * @param {Array} data Chart data list.
 * @returns {Array} Data to use as lines in the chart.
 */
export default (series, data) =>
  series.map(x => data.filter(datum => datum.series === x));
