import compose from 'ramda/src/compose';
import { isValid, parseISO } from 'date-fns';

export default compose(
  isValid,
  parseISO
);
