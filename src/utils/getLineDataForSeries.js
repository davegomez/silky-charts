export default (series, data) =>
  series.map(x => data.filter(datum => datum.series === x));
