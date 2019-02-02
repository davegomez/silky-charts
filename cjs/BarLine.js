'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-996be02a.js');
var React = require('react');
var React__default = _interopDefault(React);
require('styled-components');
require('react-dom');

var BarLine = function BarLine(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? __chunk_1.ASPECT_RATIO : _ref$aspectRatio,
      chartData = _ref.data,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      isHorizontal = _ref.isHorizontal,
      _ref$lineSeries = _ref.lineSeries,
      lineSeries = _ref$lineSeries === void 0 ? [] : _ref$lineSeries,
      _ref$lineType = _ref.lineType,
      lineType = _ref$lineType === void 0 ? __chunk_1.LINE_TYPE : _ref$lineType,
      _ref$lineTypeOption = _ref.lineTypeOption,
      lineTypeOption = _ref$lineTypeOption === void 0 ? null : _ref$lineTypeOption,
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
      _ref$secondaryTheme = _ref.secondaryTheme,
      secondaryTheme = _ref$secondaryTheme === void 0 ? __chunk_1.SECONDARY_THEME : _ref$secondaryTheme,
      _ref$stackedSeries = _ref.stackedSeries,
      stackedSeries = _ref$stackedSeries === void 0 ? [] : _ref$stackedSeries,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? __chunk_1.THEME : _ref$theme,
      _ref$ticks = _ref.ticks,
      ticks = _ref$ticks === void 0 ? __chunk_1.TICKS : _ref$ticks,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisLabel = _ref.xAxisLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? __chunk_1.ROTATION : _ref$xAxisLabelRotati,
      yAxisLabel = _ref.yAxisLabel;
  var svgRef = React.useRef();

  var _useState = React.useState(__chunk_1.getId('bar-line')),
      _useState2 = __chunk_1._slicedToArray(_useState, 1),
      id = _useState2[0];

  var _useState3 = React.useState(__chunk_1.SIZE),
      _useState4 = __chunk_1._slicedToArray(_useState3, 2),
      _useState4$ = _useState4[0],
      width = _useState4$.width,
      height = _useState4$.height,
      isSizeSet = _useState4$.isSizeSet,
      setSize = _useState4[1];

  var _useMemo = React.useMemo(function () {
    return __chunk_1.setupData(chartData);
  }, chartData),
      _useMemo2 = __chunk_1._slicedToArray(_useMemo, 2),
      isDates = _useMemo2[0],
      data = _useMemo2[1];

  var stack = React.useMemo(function () {
    return __chunk_1.buildStack(stackedSeries)(__chunk_1.toStackedForm(data));
  }, data);
  var xScale = __chunk_1.getXScale(isDates ? __chunk_1.SCALE_TIME : __chunk_1.SCALE_BAND, data, width, true);
  var yScale = __chunk_1.getYScale(__chunk_1.SCALE_LINEAR, __chunk_1.getMax(__chunk_1.getStackedMax(data, stackedSeries)), height);
  var line = __chunk_1.line().curve(__chunk_1.setLineType(lineType, lineTypeOption)).x(function (_ref2) {
    var name = _ref2.name;
    return isDates ? xScale(name) : xScale(name) + xScale.bandwidth() / 2;
  }).y(function (_ref3) {
    var value = _ref3.value;
    return yScale(value);
  });
  var lineData = __chunk_1.getLineDataForSeries(lineSeries, data);

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
  }, React__default.createElement("g", {
    className: "silky-charts-container",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")")
  }, grid && React__default.createElement(__chunk_1.Grid, {
    ref: function ref(node) {
      return __chunk_1.select(node).call(__chunk_1.drawGrid(isHorizontal, xScale, height, yScale, width, ticks));
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
  }, yAxisLabel), React__default.createElement(__chunk_1.StackedBarDatum, {
    data: data,
    series: stack,
    isDates: isDates,
    theme: theme,
    x: xScale,
    y: yScale,
    width: width,
    height: height,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }), React__default.createElement(__chunk_1.Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      __chunk_1.select(node).call(__chunk_1.axisBottom(xScale));
      isDates && __chunk_1.extendXPath(id, width);
      xAxisLabelRotation && __chunk_1.rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React__default.createElement(__chunk_1.Axis, {
    axis: "y",
    ref: function ref(node) {
      return __chunk_1.select(node).call(__chunk_1.axisLeft(yScale).ticks(ticks));
    }
  }), lineData.map(function (datum, idx) {
    return React__default.createElement("g", {
      className: "".concat(__chunk_1.head(datum)['series'], "-layer"),
      key: idx
    }, React__default.createElement(__chunk_1.LineDatum, {
      chart: "bar-line",
      data: datum,
      isDates: isDates,
      color: __chunk_1.palette.themes[secondaryTheme].base[idx],
      d: line(datum),
      xScale: xScale,
      yScale: yScale,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }));
  })));
};

exports.default = BarLine;
//# sourceMappingURL=BarLine.js.map
