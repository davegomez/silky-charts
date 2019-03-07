/**
 * Rotate the X axis labels to a given degrees.
 *
 * @param {String} node Graph node.
 * @param {Number} deg Degrees to rotate.
 * @returns {Object} Graph node.
 */
export default (node, deg) => {
  if (!node) {
    return;
  }

  const isNegative = deg < 0;
  const labels = node.querySelectorAll('.axis-x .tick text');
  labels.forEach(label => {
    label.setAttribute('text-anchor', isNegative ? 'end' : 'start');
    label.setAttribute(
      'transform',
      `translate(${isNegative ? -12 : 12}, 6) rotate(${deg})`
    );
  });

  return node;
};
