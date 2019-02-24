import { getMin, getMax } from './';

/**
 * Find the minimum and maximum value in a given list.
 *
 * @param {Array} xs List of values.
 * @returns {Array} Minimum and maximum value in the list.
 */
export default xs => [getMin(xs), getMax(xs)];
