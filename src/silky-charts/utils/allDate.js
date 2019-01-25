import all from 'ramda/src/all';
import compose from 'ramda/src/compose';
import { isValid, parseISO } from 'date-fns';
import isISODate from './isISODate';

export default all(isISODate);
