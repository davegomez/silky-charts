import { a as debounce } from './chunk-c832da19.js';
import { useEffect } from 'react';

var useResize = (function (responsive, handleSize) {
  var handleResize = debounce(handleSize)();
  useEffect(function () {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);
    return function () {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, [handleSize, responsive, handleResize]);
});

export { useResize as a };
//# sourceMappingURL=chunk-791faa2c.js.map
