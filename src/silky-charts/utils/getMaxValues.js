import compose from 'ramda/src/compose';
import identity from 'ramda/src/identity';
import filter from 'ramda/src/filter';
import sum from 'ramda/src/sum';
import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';
import values from 'ramda/src/values';

const reducer = (a, { name, value }) => {
  a[name] = a[name] ? [...a[name], value] : [value];
  return a;
};

/**
 * Using an optional list of series names calculate the largest possible values
 * adding the values for the series names provided plus the rest of the values
 * present in the data
 *
 * @param {Array} data Chart data
 * @param {Array} seriesList List of series names whose values will be added to
 * calculate the largest possible value
 * @returns {Array} List of calculated values
 */
export default (data, seriesList = []) =>
  compose(
    map(sum),
    values,
    reduce(reducer, {}),
    seriesList.length
      ? filter(({ series }) => seriesList.includes(series))
      : identity
  )(data);
