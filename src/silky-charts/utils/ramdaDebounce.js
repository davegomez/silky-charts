import apply from 'ramda/src/apply';
import curry from 'ramda/src/curry';

/**
 * Debounce function
 * Source: https://gist.github.com/tommmyy/daf61103d6022cd23d74c71b0e8adc0d
 *
 * @param {Boolean} immediate If true run `fn` at the start of the timeout
 * @param  timeMs {Number} Debounce timeout
 * @param  fn {Function} Function to debounce
 *
 * @return {Number} timeout
 * @example
 *
 *    const say = (x) => console.log(x)
 *    const debouncedSay = debounce_(false, 1000, say)();
 *
 *    debouncedSay("1")
 *    debouncedSay("2")
 *    debouncedSay("3")
 *
 */
const debounce_ = curry((immediate, timeMs, fn) => () => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;

      if (!immediate) {
        apply(fn, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, timeMs);

    if (callNow) {
      apply(fn, args);
    }

    return timeout;
  };
});

export const debounceImmediate = debounce_(true);

export const debounce = debounce_(false);
