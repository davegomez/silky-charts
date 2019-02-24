let innerId = 0;

/**
 * Creates a unique ID for each chart of the same type rendered.
 *
 * @param {String} prefix Chart name.
 * @returns {String} ID
 */
export default prefix => {
  if (!prefix) {
    return null;
  }

  const id = `silky-charts_${prefix}-${innerId}`;
  innerId += 1;
  return id;
};
