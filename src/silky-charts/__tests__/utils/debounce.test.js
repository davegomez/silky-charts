import { debounce, debounceImmediate } from '../../utils';
import { DEBOUNCE_TIME } from '../../utils/constants';

beforeEach(() => {
  jest.useFakeTimers();
});

test('call the callback function immediately', () => {
  const callback = jest.fn();
  const debouncedCallback = debounceImmediate(callback)();

  debouncedCallback();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(
    expect.any(Function),
    DEBOUNCE_TIME
  );
  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalled();
});

test('call the callback function after DEBOUNCE_TIMEms', () => {
  const callback = jest.fn();
  const debouncedCallback = debounce(callback)();

  debouncedCallback();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(
    expect.any(Function),
    DEBOUNCE_TIME
  );
  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalled();
});
