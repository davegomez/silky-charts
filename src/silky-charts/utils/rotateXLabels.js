import { selectAll as d3SelectAll } from 'd3-selection';

export default deg => {
  const isNegative = deg < 0;
  d3SelectAll('text')
    .attr('text-anchor', isNegative ? 'end' : 'start')
    .attr('transform', `translate(${isNegative ? -12 : 12}, 6) rotate(${deg})`);
};
