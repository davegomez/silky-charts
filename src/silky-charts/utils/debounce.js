import {
  debounce as ramdaDebounce,
  debounceImmediate as ramdaDebounceImmediate,
} from './ramdaDebounce';
import { DEBOUNCE } from './constants';

export const debounce = ramdaDebounce(DEBOUNCE);
export const debounceImmediate = ramdaDebounceImmediate(DEBOUNCE);
