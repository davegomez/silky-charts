import addIndex from 'ramda/src/addIndex';
import compose from 'ramda/src/compose';
import groupBy from 'ramda/src/groupBy';
import map from 'ramda/src/map';
import mergeAll from 'ramda/src/mergeAll';
import prop from 'ramda/src/prop';
import toPairs from 'ramda/src/toPairs';

const mapIndexed = addIndex(map);

/**
 * Map all the series to a single name to be used by the tooltip group using the
 * name as a reference according to the mouse position.
 *
 * @param {Array} data Chart's data.
 * @param {Array} positions List of positions to map the data with.
 * @returns {Object} Mapped data.
 */
export default (data, positions) =>
  compose(
    mergeAll,
    // eslint-disable-next-line no-unused-vars
    mapIndexed(([_, x], idx) => ({ [positions[idx]]: x })),
    toPairs,
    groupBy(prop('name'))
  )(data);
