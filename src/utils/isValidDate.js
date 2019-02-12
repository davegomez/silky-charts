import complement from 'ramda/src/complement';
import compose from 'ramda/src/compose';

const isNotNaN = complement(isNaN);

export default compose(
  isNotNaN,
  Date.parse
);
