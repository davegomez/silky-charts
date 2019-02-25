import compose from 'ramda/src/compose';
import groupBy from 'ramda/src/groupBy';
import prop from 'ramda/src/prop';
import toPairs from 'ramda/src/toPairs';

/**
 * The data must be ordered by series before the area is created.
 *
 * @param {Array} _ Chart data.
 * @returns {Function} Ordering function that returns a list ordered by data
 * series.
 */
export default compose(
  toPairs,
  groupBy(prop('series'))
);
