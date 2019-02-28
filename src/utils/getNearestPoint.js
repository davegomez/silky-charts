import find from 'ramda/src/find';

export default (axis, margin, positions) => {
  const mouseAxis = axis - margin;
  const epsilon = (positions[1] - positions[0]) / 2;
  return find(x => Math.abs(x - mouseAxis) <= epsilon, positions);
};
