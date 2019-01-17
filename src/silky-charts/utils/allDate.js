import all from 'ramda/src/all';
import compose from 'ramda/src/compose';
import { isValid, parseISO } from 'date-fns';

export default all(
  compose(
    isValid,
    parseISO
  )
);
