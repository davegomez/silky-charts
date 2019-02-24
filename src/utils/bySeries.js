import compose from 'ramda/src/compose';
import groupBy from 'ramda/src/groupBy';
import prop from 'ramda/src/prop';
import toPairs from 'ramda/src/toPairs';

/**
 * The data must be ordered by series before the area is created.
 *
 * @returns {Function} Ordering function
 */
export default compose(
  toPairs,
  groupBy(prop('series'))
);
