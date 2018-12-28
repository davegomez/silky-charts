import { selectAll } from 'd3-selection'

export default deg =>
  selectAll('text')
    .attr('text-anchor', 'end')
    .attr('transform', `translate(-12, 6) rotate(${deg})`)
