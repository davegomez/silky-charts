import { select as d3Select } from 'd3-selection';

/**
 * Extend the x axis path length if all the name values are instance of Date
 *
 * @param {String} id Unique chart id
 * @param {Number} width Chart width
 */
export default (id, width) =>
  d3Select(`#${id} .axis-x path.domain`).attr('d', () => `M0,0.6V0.5H${width}`);
