/**
 * Use the series value to create a class to identify the element.
 *
 * @param {String} series Series name.
 * @returns {String} Classname.
 */
export default series => series.replace(/ /g, '-').toLowerCase();
