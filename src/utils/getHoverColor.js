export default rgb =>
  `rgb(${rgb
    .split(/\D/)
    .filter(x => x)
    .map(x => {
      let val = parseInt(x) + -20;
      if (val > 255) {
        val = 255;
      } else if (val < 0) {
        val = 0;
      }
      return val;
    })
    .join(', ')})`;
