import { selectAll } from 'd3-selection';

export default deg => {
  const isNegative = deg < 0;
  selectAll('text')
    .attr('text-anchor', isNegative ? 'end' : 'start')
    .attr('transform', `translate(${isNegative ? -12 : 12}, 6) rotate(${deg})`);
};
