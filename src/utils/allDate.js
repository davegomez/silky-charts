import all from 'ramda/src/all';
import equals from 'ramda/src/equals';
import or from 'ramda/src/or';
import type from 'ramda/src/type';
import isValidDate from './isValidDate';

const isString = equals('String');
const isDate = equals('Date');
const isStringOrDate = x => or(isString(type(x)), isDate(type(x)));

const allStringOrDate = all(isStringOrDate);
const allValidDate = all(isValidDate);

/**
 * The values in the name field can be regular strings or ISO string dates.
 *
 * @param {[String]} dates List of strings to check.
 * @returns {Boolean} True if all the values are Dates.
 */
export default dates => allStringOrDate(dates) && allValidDate(dates);
