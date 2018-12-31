import compose from 'ramda/src/compose';
import flatten from 'ramda/src/flatten';
import map from 'ramda/src/map';
import omit from 'ramda/src/omit';
import props from 'ramda/src/props';
import sum from 'ramda/src/sum';
import values from 'ramda/src/values';

/**
 * Using an optional list of keys calculate the largest possible values adding
 * the values for the keys provided plus the rest of the values present in the
 * data.
 *
 * @param {Array} stacked List of keys whose values will be added to calculate
 * the largest possible value
 * @param {Array} data Chart data
 * @returns {Array} List of calculated values
 */
export default (stacked = [], data) => {
  const getStackedValues = map(map(sum, props(stacked)));

  const getAdditionalValues = compose(
    flatten,
    map(
      compose(
        values,
        omit([...stacked, 'name'])
      )
    )
  );

  return [
    ...(stacked.length ? getStackedValues(data) : []),
    ...getAdditionalValues(data),
  ];
};
