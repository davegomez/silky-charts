import { debounce, debounceImmediate } from '../../utils';
import { DEBOUNCE } from '../../utils/constants';

beforeEach(() => {
  jest.useFakeTimers();
});

test('call the callback function immediately', () => {
  const callback = jest.fn();
  const debouncedCallback = debounceImmediate(callback)();

  debouncedCallback();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), DEBOUNCE);
  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalled();
});

test('call the callback function after DEBOUNCEms', () => {
  const callback = jest.fn();
  const debouncedCallback = debounce(callback)();

  debouncedCallback();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), DEBOUNCE);
  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalled();
});
