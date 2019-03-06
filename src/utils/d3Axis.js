import { axisTop, axisRight, axisBottom, axisLeft } from 'd3-axis';

export default (orient, scale) => {
  const axes = {
    top: axisTop,
    right: axisRight,
    bottom: axisBottom,
    left: axisLeft,
  };

  return axes[orient](scale);
};
