// @flow
export default (xAxis: any, deg: ?number): void =>
  xAxis
    .selectAll('text')
    .attr('text-anchor', 'end')
    .attr('transform', `translate(-12, 6) rotate(${deg || '-50'})`)
