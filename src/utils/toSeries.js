import flatten from 'ramda/src/flatten';

export default (dataset, omit = []) =>
  flatten(
    Object.keys(dataset).map(name =>
      Object.entries(dataset[name]).reduce((acc, [series, value]) => {
        if (!omit.includes(series)) {
          acc.push({
            name,
            series,
            value: parseInt(value),
          });
        }

        return acc;
      }, [])
    )
  );
