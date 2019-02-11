'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-7fc9ede4.js');
var React = require('react');
var React__default = _interopDefault(React);
var d3Axis = require('d3-axis');
var d3Scale = require('d3-scale');
var d3Selection = require('d3-selection');
var d3TimeFormat = require('d3-time-format');
var identity = _interopDefault(require('ramda/src/identity'));
require('styled-components');
require('react-dom');
var d3Shape = require('d3-shape');
require('ramda/src/all');
require('ramda/src/compose');
require('date-fns');
require('ramda/src/groupBy');
require('ramda/src/prop');
require('ramda/src/toPairs');
require('ramda/src/apply');
require('ramda/src/curry');
require('color');
require('ramda/src/length');
require('ramda/src/uniq');
require('ramda/src/map');
require('ramda/src/max');
require('ramda/src/filter');
require('ramda/src/sum');
require('ramda/src/reduce');
require('ramda/src/values');
require('ramda/src/always');
require('ramda/src/cond');
require('ramda/src/equals');
require('ramda/src/T');
require('d3-array');
require('ramda/src/flatten');
require('ramda/src/omit');
require('ramda/src/mergeAll');
require('ramda/src/splitEvery');
var head = _interopDefault(require('ramda/src/head'));
require('ramda/src/last');
require('ramda/src/type');

var BarLine = function BarLine(_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? __chunk_1.ASPECT_RATIO : _ref$aspectRatio,
      title = _ref.title,
      chartData = _ref.data,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? __chunk_1.TIME_FORMAT : _ref$dateFormat,
      grid = _ref.grid,
      _ref$height = _ref.height,
      svgHeight = _ref$height === void 0 ? undefined : _ref$height,
      horizontal = _ref.horizontal,
      _ref$lineSeries = _ref.lineSeries,
      lineSeries = _ref$lineSeries === void 0 ? [] : _ref$lineSeries,
      _ref$lineType = _ref.lineType,
      lineType = _ref$lineType === void 0 ? __chunk_1.LINE_TYPE : _ref$lineType,
      _ref$lineTypeOption = _ref.lineTypeOption,
      lineTypeOption = _ref$lineTypeOption === void 0 ? null : _ref$lineTypeOption,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? __chunk_1.MARGIN : _ref$margin,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? identity : _ref$onClick,
      _ref$onMouseEnter = _ref.onMouseEnter,
      onMouseEnter = _ref$onMouseEnter === void 0 ? identity : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? identity : _ref$onMouseLeave,
      _ref$padding = _ref.padding,
      xScalePadding = _ref$padding === void 0 ? __chunk_1.SCALE_PADDING : _ref$padding,
      responsive = _ref.responsive,
      _ref$secondaryTheme = _ref.secondaryTheme,
      secondaryTheme = _ref$secondaryTheme === void 0 ? __chunk_1.SECONDARY_THEME : _ref$secondaryTheme,
      _ref$stackedSeries = _ref.stackedSeries,
      stackedSeries = _ref$stackedSeries === void 0 ? [] : _ref$stackedSeries,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? __chunk_1.THEME : _ref$theme,
      tooltip = _ref.tooltip,
      sourceLabel = _ref.sourceLabel,
      _ref$width = _ref.width,
      svgWidth = _ref$width === void 0 ? undefined : _ref$width,
      xAxisChartLabel = _ref.xAxisChartLabel,
      xAxisLabelRotation = _ref.xAxisLabelRotation,
      _ref$xAxisLabelRotati = _ref.xAxisLabelRotationValue,
      xAxisLabelRotationValue = _ref$xAxisLabelRotati === void 0 ? __chunk_1.ROTATION : _ref$xAxisLabelRotati,
      _ref$xAxisTicks = _ref.xAxisTicks,
      xAxisTicks = _ref$xAxisTicks === void 0 ? __chunk_1.TICKS : _ref$xAxisTicks,
      yAxisChartLabel = _ref.yAxisChartLabel,
      _ref$yAxisTicks = _ref.yAxisTicks,
      yAxisTicks = _ref$yAxisTicks === void 0 ? __chunk_1.TICKS : _ref$yAxisTicks;
  var svgRef = React.useRef();

  var _useState = React.useState(__chunk_1.getId('bar-line')),
      _useState2 = __chunk_1._slicedToArray(_useState, 1),
      id = _useState2[0];

  var timeFormat = d3TimeFormat.timeFormat(dateFormat);

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

  var stack = __chunk_1.buildStack(stackedSeries)(__chunk_1.toStackedForm(data));
  var xScale = d3Scale.scaleBand().domain(data.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  })).range([0, width]).padding(xScalePadding);
  var yScale = d3Scale.scaleLinear().domain([0, __chunk_1.getMax(__chunk_1.getStackedMax(data, stackedSeries))]).range([height, 0]);
  var line = d3Shape.line().curve(__chunk_1.setLineType(lineType, lineTypeOption)).x(function (_ref3) {
    var name = _ref3.name;
    return xScale(name) + xScale.bandwidth() / 2;
  }).y(function (_ref4) {
    var value = _ref4.value;
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
  }, React__default.createElement(__chunk_1.MainGroup, {
    margin: margin
  }, grid && React__default.createElement(__chunk_1.Grid, {
    ref: function ref(node) {
      return d3Selection.select(node).call(__chunk_1.drawGrid(horizontal, xScale, height, yScale, width, xAxisTicks, yAxisTicks));
    }
  }), title && React__default.createElement(__chunk_1.Title, {
    margin: margin,
    width: width
  }, title), xAxisChartLabel && React__default.createElement(__chunk_1.Label, {
    axis: "x",
    margin: margin,
    width: width,
    height: height
  }, xAxisChartLabel), yAxisChartLabel && React__default.createElement(__chunk_1.Label, {
    axis: "y",
    margin: margin,
    width: width,
    height: height
  }, yAxisChartLabel), sourceLabel && React__default.createElement(__chunk_1.Source, {
    margin: margin,
    width: width,
    height: height
  }, sourceLabel), React__default.createElement(__chunk_1.StackedBarDatum, {
    data: data,
    series: stack,
    theme: theme,
    x: xScale,
    y: yScale,
    width: width,
    height: height,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    tooltip: tooltip
  }), React__default.createElement(__chunk_1.Axis, {
    axis: "x",
    position: {
      x: 0,
      y: height
    },
    ref: function ref(node) {
      d3Selection.select(node).call(d3Axis.axisBottom(xScale).ticks(xAxisTicks).tickFormat(isDates ? timeFormat : null));
      xAxisLabelRotation && __chunk_1.rotateXLabels(id, xAxisLabelRotationValue);
    }
  }), React__default.createElement(__chunk_1.Axis, {
    axis: "y",
    ref: function ref(node) {
      return d3Selection.select(node).call(d3Axis.axisLeft(yScale).ticks(yAxisTicks));
    }
  }), lineData.map(function (datum, idx) {
    return React__default.createElement("g", {
      className: "".concat(head(datum)['series'], "-layer"),
      key: idx
    }, React__default.createElement(__chunk_1.LineDatum, {
      chart: "bar-line",
      data: datum,
      color: __chunk_1.palette.themes[secondaryTheme].base[idx],
      d: line(datum),
      xScale: xScale,
      yScale: yScale,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      tooltip: tooltip
    }));
  })));
};

exports.default = BarLine;
//# sourceMappingURL=BarLine.js.map
