import complement from 'ramda/src/complement';
import compose from 'ramda/src/compose';

const isNotNaN = complement(isNaN);

/**
 * Validate if the string passed is a valid ISO string date.
 *
 * @param {String} _ ISO string date to validate.
 * @returns {Function} Validation function that returns true if the string is a
 * valid date.
 */
export default compose(
  isNotNaN,
  Date.parse
);
