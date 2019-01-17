import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import prop from 'ramda/src/prop';
import uniq from 'ramda/src/uniq';

export default compose(
  uniq,
  map(prop('series'))
);
