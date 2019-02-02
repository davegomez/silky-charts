'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-996be02a.js');
var React = require('react');
var React__default = _interopDefault(React);
require('styled-components');
require('react-dom');

var Bar = function Bar(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? __chunk_1.ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? __chunk_1.TIME_FORMAT : _ref$dateFormat,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      isHorizontal = _ref.isHorizontal,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? __chunk_1.MARGIN : _ref$margin,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? __chunk_1.identity : _ref$onClick,
      _ref$onMouseEnter = _ref.onMouseEnter,
      onMouseEnter = _ref$onMouseEnter === void 0 ? __chunk_1.identity : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? __chunk_1.identity : _ref$onMouseLeave,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? false : _ref$responsive,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? __chunk_1.THEME : _ref$theme,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisLabel = _ref.xAxisLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? __chunk_1.ROTATION : _ref$xAxisLabelRotati,
      _ref$xAxisTicks = _ref.xAxisTicks,
      xAxisTicks = _ref$xAxisTicks === void 0 ? __chunk_1.TICKS : _ref$xAxisTicks,
      _ref$xScalePadding = _ref.xScalePadding,
      xScalePadding = _ref$xScalePadding === void 0 ? __chunk_1.SCALE_PADDING : _ref$xScalePadding,
      yAxisLabel = _ref.yAxisLabel,
      _ref$yAxisTicks = _ref.yAxisTicks,
      yAxisTicks = _ref$yAxisTicks === void 0 ? __chunk_1.TICKS : _ref$yAxisTicks;
  var svgRef = React.useRef();

  var _useState = React.useState(__chunk_1.getId('bar')),
      _useState2 = __chunk_1._slicedToArray(_useState, 1),
      id = _useState2[0];

  var timeFormat = __chunk_1.timeFormat(dateFormat);

  var _useState3 = React.useState(__chunk_1.SIZE),
      _useState4 = __chunk_1._slicedToArray(_useState3, 2),
      _useState4$ = _useState4[0],
      width = _useState4$.width,
      height = _useState4$.height,
      isSizeSet = _useState4$.isSizeSet,
      setSize = _useState4[1];

  var _setupData = __chunk_1.setupData(chartData),
      _setupData2 = __chunk_1._slicedToArray(_setupData, 2),
      isDates = _setupData2[0],
      data = _setupData2[1];

  var xScale = __chunk_1.band().domain(data.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  })).range([0, width]).padding(xScalePadding);
  var yScale = __chunk_1.linear().domain([0, __chunk_1.getMax(data.map(function (_ref3) {
    var value = _ref3.value;
    return value;
  }))]).range([height, 0]);

  var handleSize = function handleSize() {
    var offsetWidth = svgRef.current.parentElement.offsetWidth;

    if ((svgWidth || svgHeight) && !isSizeSet) {
      setSize(__chunk_1._objectSpread({}, __chunk_1.getSize(svgWidth, svgHeight, margin, aspectRatio), {
        isSizeSet: true
      }));
    } else if (offsetWidth !== svgWidth - (margin.left + margin.right)) {
      setSize(__chunk_1._objectSpread({}, __chunk_1.getSize(offsetWidth, undefined, margin, aspectRatio), {
        isSizeSet: true
      }));
    }
  };

  var handleResize = __chunk_1.debounce(handleSize)();
  React.useEffect(function () {
    handleSize();
    responsive && window.addEventListener('resize', handleResize);
    return function () {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return React__default.createElement(__chunk_1.SVG, {
    identifier: id,
    size: {
      width: svgWidth || width + margin.left + margin.right,
      height: svgHeight || height + margin.top + margin.bottom
    },
    ref: svgRef
  }, React__default.createElement(__chunk_1.MainGroup, {
    margin: margin
  }, grid && React__default.createElement(__chunk_1.Grid, {
    ref: function ref(node) {
      return __chunk_1.select(node).call(__chunk_1.drawGrid(isHorizontal, xScale, height, yScale, width, xAxisTicks, yAxisTicks));
    }
  }), xAxisLabel && React__default.createElement(__chunk_1.Label, {
    axis: "x",
    margin: margin,
    width: width,
    height: height
  }, xAxisLabel), yAxisLabel && React__default.createElement(__chunk_1.Label, {
    axis: "y",
    margin: margin,
    width: width,
    height: height
  }, yAxisLabel), React__default.createElement(__chunk_1.DataGroup, null, data.map(function (_ref4, idx) {
    var name = _ref4.name,
        value = _ref4.value;
    return React__default.createElement(__chunk_1.BarDatum, {
      key: idx,
      datum: {
        name: name,
        value: value
      },
      color: __chunk_1.getBaseColor(theme),
      x: xScale(name),
      y: yScale(value),
      width: xScale.bandwidth(),
      height: height - yScale(value),
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    });
  })), React__default.createElement(__chunk_1.Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      __chunk_1.select(node).call(__chunk_1.axisBottom(xScale).ticks(yAxisTicks).tickFormat(isDates ? timeFormat : null));
      xAxisLabelRotation && __chunk_1.rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React__default.createElement(__chunk_1.Axis, {
    axis: "y",
    ref: function ref(node) {
      return __chunk_1.select(node).call(__chunk_1.axisLeft(yScale).ticks(yAxisTicks));
    }
  })));
};

exports.default = Bar;
//# sourceMappingURL=Bar.js.map
