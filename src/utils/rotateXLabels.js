import { select as d3Select } from 'd3-selection';

/**
 * Rotate the X axis labels to a given degrees.
 *
 * @param {String} node Graph node.
 * @param {Number} deg Degrees to rotate.
 * @returns {Void}
 */
export default (node, deg) => {
  const isNegative = deg < 0;
  d3Select(node)
    .selectAll('.axis-x .tick text')
    .attr('text-anchor', isNegative ? 'end' : 'start')
    .attr('transform', `translate(${isNegative ? -12 : 12}, 6) rotate(${deg})`);
};
