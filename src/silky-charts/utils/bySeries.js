import compose from 'ramda/src/compose';
import groupBy from 'ramda/src/groupBy';
import prop from 'ramda/src/prop';
import toPairs from 'ramda/src/toPairs';

export default compose(
  toPairs,
  groupBy(prop('series'))
);
