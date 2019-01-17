let idx = 0;

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
