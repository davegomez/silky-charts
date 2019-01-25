import compose from 'ramda/src/compose';
import flatten from 'ramda/src/flatten';
import map from 'ramda/src/map';
import omit from 'ramda/src/omit';
import toPairs from 'ramda/src/toPairs';

const toSingle = datum =>
  compose(
    map(([series, value]) => ({ name: datum.name, series, value })),
    toPairs,
    omit(['name'])
  )(datum);

export default compose(
  flatten,
  map(toSingle)
);
