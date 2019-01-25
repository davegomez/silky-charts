import all from 'ramda/src/all';
import compose from 'ramda/src/compose';
import { isValid, parseISO } from 'date-fns';

export const isDate = compose(
  isValid,
  parseISO
);

export default all(isDate);
