/**
 * Remove the ticks from the axis after creation.
 *
 * @param {String} node Graph node.
 * @returns {Object} Graph node.
 */
export default node => {
  if (!node) {
    return;
  }

  const ticks = node.querySelectorAll('.tick line');
  ticks.forEach(tick => tick.remove());
  const path = node.querySelector('path.domain');
  const d = path.getAttribute('d');
  path.setAttribute('d', d.replace(/.5(V|H-)6/, ''));

  return node;
};
