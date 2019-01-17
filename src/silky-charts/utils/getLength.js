import compose from 'ramda/src/compose';
import length from 'ramda/src/length';
import uniq from 'ramda/src/uniq';
import prop from 'ramda/src/prop';
import map from 'ramda/src/map';

export default compose(
  length,
  uniq,
  map(prop('name'))
);
