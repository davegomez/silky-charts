import always from 'ramda/src/always';
import { TOOLTIP_OFFSET } from './constants';

/**
 * Calculates the position of the tooltip based on the position specified in
 * the prop staticTooltip of use the default instead to position the tooltip
 * on top of the mouse cursor.
 *
 * @param {Object} node Graph's SVG node.
 * @param {Object} margin Chart's maring prop.
 * @param {Object} mousePosition PageX and PageY values returned by the
 * mouseMove event.
 * @param {Object} size Tooltip bubble width and height.
 * @param {String} position Position of the tooltip specified in the
 * staticTooltip prop.
 * @returns {Object} Object containing the top and left values to position the
 * tooltip.
 */
export default (
  node,
  margin,
  { pageX, pageY },
  { width, height },
  position = 'default'
) => {
  const { top, right, bottom, left } = node.getBoundingClientRect();
  const leftOffset = always(left + margin.left + TOOLTIP_OFFSET);
  const topOffset = always(top + margin.top + TOOLTIP_OFFSET);
  const rightOffset = always(right - width - margin.right - TOOLTIP_OFFSET);
  const bottomOffset = always(bottom - height - margin.bottom - TOOLTIP_OFFSET);
  const positionMap = {
    'top-left': { left: leftOffset(), top: topOffset() },
    'top-right': { left: rightOffset(), top: topOffset() },
    'bottom-right': { left: rightOffset(), top: bottomOffset() },
    'bottom-left': { left: leftOffset(), top: bottomOffset() },
    default: {
      left: pageX - width / 2,
      top: pageY - height - 16,
    },
  };

  return positionMap[position];
};
