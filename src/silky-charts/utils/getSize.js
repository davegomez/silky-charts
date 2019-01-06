import { WIDTH } from './constants';

export default (w1, h1, { top, right, bottom, left }, r) => {
  const [r1, r2] = r.split(':');
  const w2 = w1 ? w1 : WIDTH;
  const h2 = h1 ? h1 : (w2 / r1) * r2;

  if (w1 && h1) {
    return {
      width: w1 - left - right,
      height: h1 - top - bottom,
    };
  }

  const width = w1 ? w2 : (h2 / r2) * r1;
  const height = h1 ? h2 : (w2 / r1) * r2;

  return {
    width: width - left - right,
    height: height - top - bottom,
  };
};
