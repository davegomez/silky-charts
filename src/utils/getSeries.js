import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import prop from 'ramda/src/prop';
import uniq from 'ramda/src/uniq';

/**
 * Get the list of series in the chart data.
 *
 * @param {Array} _ Chart data.
 * @returns {Function} Ordering function that returns a list of unique series
 * names.
 */
export default compose(
  uniq,
  map(prop('series'))
);
