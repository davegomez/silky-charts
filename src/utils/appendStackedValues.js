let idx = 0;

/**
 * The "stacked" charts use these values to generate both instances of the Y
 * axis.
 *
 * @param {Object} stack D3 stack object.
 * @param {Array} data Chart data list.
 * @returns {Array} The modified chart data list.
 */
export default (stack, data) => {
  stack.forEach(values => {
    data.forEach(datum => {
      if (values.key === datum.series) {
        datum.stackedValues = values[idx];
        idx += 1;
      }
    });

    idx = 0;
  });

  return data;
};
