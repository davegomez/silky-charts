import head from 'ramda/src/head';
import { themes } from './palette';

/**
 * Use the first color in the color theme list to use it as base color.
 *
 * @param {Array} theme Color theme list
 * @returns {String} Color
 */
export default theme => head(themes[theme]);
