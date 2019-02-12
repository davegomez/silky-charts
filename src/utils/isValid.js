import complement from 'ramda/src/complement';
import compose from 'ramda/src/compose';
import toDate from './toDate';

const isNotNaN = complement(isNaN);

export default compose(
  isNotNaN,
  toDate
);
