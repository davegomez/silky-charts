import max from 'ramda/src/max';
import min from 'ramda/src/min';

/**
 * Find the minimum and maximum value in a given list.
 *
 * @param {Array} xs List of values.
 * @returns {Array} Minimum and maximum value in the list.
 */
export default xs => [xs.reduce(min), xs.reduce(max)];
