/* ignore file coverage */

const rect = { top: 10, right: 10, bottom: 10, left: 10 };

module.exports = {
  margin: rect,
  node: { getBoundingClientRect: jest.fn(() => rect) },
  staticTooltip: false,
  visibleTicks: true,
  xAxisLabelRotation: false,
  xAxisLabelRotationValue: -65,
};
