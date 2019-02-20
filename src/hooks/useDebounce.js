import { useCallback, useEffect, useRef } from 'react';

export default (callback, delay, deps) => {
  let { current } = useRef(null);
  const debouncedFunction = useCallback(callback, deps);

  useEffect(
    () => () => {
      clearTimeout(current);
    },
    [current]
  );

  return (...args) => {
    clearTimeout(current);
    current = setTimeout(() => debouncedFunction(...args), delay);
  };
};
