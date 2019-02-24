import flatten from 'ramda/src/flatten';

/**
 * Utility function that tranforms a given object into a valid Silky Charts data
 * list based on series where you can also pass an option list of series names
 * to be omitted from the final data list.
 *
 * Example:
 *
 * -- Input
 * {
 *   foo: { bar: 0, baz: 1, qux: 2 },
 *   bar: { bar: 3, baz: 4, qux: 5 },
 *   baz: { bar: 6, baz: 7, qux: 8 },
 * }
 *
 * -- Output
 * [
 *   { name: 'foo', series: 'bar', value: 0 },
 *   { name: 'foo', series: 'baz', value: 1 },
 *   { name: 'foo', series: 'qux', value: 2 },
 *   { name: 'bar', series: 'bar', value: 3 },
 *   { name: 'bar', series: 'baz', value: 4 },
 *   { name: 'bar', series: 'qux', value: 5 },
 *   { name: 'baz', series: 'bar', value: 6 },
 *   { name: 'baz', series: 'baz', value: 7 },
 *   { name: 'baz', series: 'qux', value: 8 },
 * ]
 *
 * @param {Object} dataset Data to be transformed.
 * @param {Array} omit List of string with the names of the series to ammited.
 * @returns {Array} Data list.
 */
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
