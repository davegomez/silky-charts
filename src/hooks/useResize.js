import { useEffect, useRef } from 'react';
import useDebounce from './useDebounce';

export default (responsive, handleSize) => {
  const refSize = useRef(handleSize);
  const handleResize = useDebounce(handleSize, 250, [handleSize]);

  useEffect(() => refSize.current(), [refSize]);

  useEffect(() => {
    responsive && window.addEventListener('resize', handleResize);

    return () => {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, [responsive, handleResize]);
};
