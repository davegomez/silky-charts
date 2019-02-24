import { selectAll as d3SelectAll } from 'd3-selection';

/**
 * Rotate the X axis labels to a given degrees.
 *
 * @param {String} id Unique chart ID.
 * @param {Number} deg Degrees to rotate.
 * @returns {Void}
 */
export default (id, deg) => {
  const isNegative = deg < 0;
  d3SelectAll(`#${id} .axis-x .tick text`)
    .attr('text-anchor', isNegative ? 'end' : 'start')
    .attr('transform', `translate(${isNegative ? -12 : 12}, 6) rotate(${deg})`);
};
