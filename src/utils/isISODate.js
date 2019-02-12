import compose from 'ramda/src/compose';
import isValid from './isValid';
import parseISO from './parseISO';

export default compose(
  isValid,
  parseISO
);
