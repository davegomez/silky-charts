export default (keys, data) =>
  keys.map(key =>
    data.map(datum => ({ name: datum.name, value: datum[key], key }))
  );
