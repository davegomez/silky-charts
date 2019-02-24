import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import T from 'ramda/src/T';
import { LINE_TYPES } from './constants';

/**
 * Apply the option to the corresponding line type if exist.
 *
 * @param {String} type Line type.
 * @param {Number} option Option value.
 * @returns {Function} Line type setter.
 */
export default (type, option = null) =>
  cond([
    [equals('curveBundle'), () => LINE_TYPES[type].beta(option)],
    [equals('curveCardinalOpen'), () => LINE_TYPES[type].tension(option)],
    [equals('curveCatmullRomOpen'), () => LINE_TYPES[type].alpha(option)],
    [T, () => LINE_TYPES[type]],
  ])(type);
