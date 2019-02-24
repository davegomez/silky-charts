import { allDate } from './';

/**
 * Validates if the values in the data's name fields are valid dates and if is
 * the case transfor this dates into instances of Date before returning a tuple
 * with the validation result and the new data list.
 *
 * @param {Array} d Chart's data.
 * @returns {Array} Tupple containing the dates validation result and the
 * transformed new data list.
 */
export default d => {
  const isDates = allDate(d.map(({ name }) => name));
  const data = isDates ? d.map(x => ({ ...x, name: new Date(x.name) })) : d;

  return [isDates, data];
};
