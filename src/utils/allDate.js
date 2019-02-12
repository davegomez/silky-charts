import all from 'ramda/src/all';
import compose from 'ramda/src/compose';
import equals from 'ramda/src/equals';
import or from 'ramda/src/or';
import type from 'ramda/src/type';
import isValidDate from './isValidDate';

const isString = equals('String');
const isDate = equals('Date');
const isStringOrDate = x => or(isString(type(x)), isDate(type(x)));

const allStringOrDate = all(isStringOrDate);
const allValidDate = all(isValidDate);

export default dates => allStringOrDate(dates) && allValidDate(dates);
