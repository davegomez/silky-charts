import { useEffect } from 'react';
import { debounce } from '../utils';

export default (responsive, handleSize) => {
  const handleResize = debounce(handleSize)();

  useEffect(() => {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);

    return () => {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, []);
};
