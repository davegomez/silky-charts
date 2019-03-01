import { TOOLTIP_OFFSET } from './constants';

/**
 * Calculates the position of the tooltip based on the position specified in
 * the prop staticTooltip of use the default instead to position the tooltip
 * on top of the mouse cursor.
 *
 * @param {Object} margin Chart's maring prop.
 * @param {Object} mousePosition PageX and PageY values returned by the
 * mouseMove event.
 * @param {Number} width Tooltip bubble width.
 * @param {Number} height Tooltip bubble height.
 * @param {String} position Position of the tooltip specified in the
 * staticTooltip prop.
 * @param {Object} svg Chart's SVG node.
 * @returns {Object} Object containing the top and left values to position the
 * tooltip.
 */
export default (
  margin,
  { pageX, pageY },
  width,
  height,
  position = 'default',
  svg
) => {
  const { top, right, bottom, left } = svg.getBoundingClientRect();
  const positionMap = {
    'top-left': {
      left: left + margin.left + TOOLTIP_OFFSET,
      top: top + margin.top + TOOLTIP_OFFSET,
    },
    'top-right': {
      left: right - width - margin.right - TOOLTIP_OFFSET,
      top: top + margin.top + TOOLTIP_OFFSET,
    },
    'bottom-right': {
      left: right - width - margin.right - TOOLTIP_OFFSET,
      top: bottom - height - margin.bottom - TOOLTIP_OFFSET,
    },
    'bottom-left': {
      left: left + margin.left + TOOLTIP_OFFSET,
      top: bottom - height - margin.bottom - TOOLTIP_OFFSET,
    },
    default: {
      left: `${pageX - width / 2}px`,
      top: `${pageY - height - 16}px`,
    },
  };

  return positionMap[position];
};
