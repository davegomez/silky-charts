import { select } from 'd3-selection'

/**
 * Extend the x axis path length if all the name values are instance of Date
 *
 * @param {Number} width Chart width
 */
export default width =>
  select('path.domain').attr('d', () => `M0,0.5V0.5H${width + 2}`)
