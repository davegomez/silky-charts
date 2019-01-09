import {
  debounce as ramdaDebounce,
  debounceImmediate as ramdaDebounceImmediate,
} from './ramdaDebounce';
import { DEBOUNCE_TIME } from './constants';

export const debounce = ramdaDebounce(DEBOUNCE_TIME);
export const debounceImmediate = ramdaDebounceImmediate(DEBOUNCE_TIME);
