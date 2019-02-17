export default (rgb = 'rgb(0, 0, 0)', amt = -20) =>
  `rgb(${rgb
    .split(/\D/)
    .filter(x => x)
    .map(x => {
      let val = parseInt(x) + amt;
      if (val > 255) {
        val = 255;
      } else if (val < 0) {
        val = 0;
      }
      return val;
    })
    .join(', ')})`;
