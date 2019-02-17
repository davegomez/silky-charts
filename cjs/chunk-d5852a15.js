'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-b1f74868.js');
var React = require('react');
var React__default = _interopDefault(React);

var useResize = (function (responsive, handleSize) {
  var handleResize = __chunk_1.debounce(handleSize)();
  React.useEffect(function () {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);
    return function () {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, [handleSize, responsive, handleResize]);
});

exports.useResize = useResize;
//# sourceMappingURL=chunk-d5852a15.js.map
