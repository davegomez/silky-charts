import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import mergeAll from 'ramda/src/mergeAll';
import prop from 'ramda/src/prop';
import sortBy from 'ramda/src/sortBy';
import splitEvery from 'ramda/src/splitEvery';
import { getSeries } from './';

/**
 * Transforms a given data list to be consumed by the D3 stack function.
 *
 * @param {Array} data Chart's data list.
 * @returns {Array} Stacked formatted chart's data.
 */
export default data =>
  compose(
    map(mergeAll),
    splitEvery(getSeries(data).length),
    map(({ name, series, value }) => ({ name, [series]: value })),
    sortBy(prop('name'))
  )(data);
