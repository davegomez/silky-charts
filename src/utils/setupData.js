import uniq from 'ramda/src/uniq';
import { isValidDate } from './';

/**
 * Validates if the values in the data's name fields are valid dates and if is
 * the case transform this dates into instances of Date before returning a tuple
 * with the validation result, the new data list, and the unique list of names.
 *
 * @param {Array} dataset Chart's data.
 * @returns {Array} Tupple containing the dates validation result, the
 * transformed new data list, and an array with the unique list of names.
 */
export default dataset => {
  const isDates = isValidDate(dataset[0].name);
  const names = uniq(dataset.map(({ name }) => name));

  return [
    isDates,
    isDates ? dataset.map(x => ({ ...x, name: new Date(x.name) })) : dataset,
    isDates ? names.map(x => new Date(x)) : names,
  ];
};
