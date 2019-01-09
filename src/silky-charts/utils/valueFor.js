import always from 'ramda/src/always';
import equals from 'ramda/src/equals';
import cond from 'ramda/src/cond';
import identity from 'ramda/src/identity';
import T from 'ramda/src/T';

/**
 * Use this utility function when you need a value calculation based on the
 * chart width and the data length so you don't have to repeat the code in
 * several places
 *
 * @param {String} option Option to get the value for
 * @param {Number} width Chart width
 * @param {Number} length Data length
 *
 * @return {Number} Calculated number
 */
export default (option, width, length) =>
  cond([
    [equals('x'), always(width / length / 2.4)],
    [equals('width'), always(width / (length * 1.1973))],
    [T, identity],
  ])(option);
