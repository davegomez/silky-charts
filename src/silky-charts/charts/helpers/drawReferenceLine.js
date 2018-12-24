export default (chart, scale, width) =>
  chart
    .append('line')
    .attr('class', 'reference-line')
    .attr('x1', 0)
    .attr('y1', scale)
    .attr('x2', width)
    .attr('y2', scale)
