import { a as _toConsumableArray, b as _slicedToArray, c as _defineProperty, d as _objectSpread, e as _taggedTemplateLiteral, f as _extends } from './chunk-7cf43bf1.js';
import React, { createContext, useContext, useState, Fragment, useRef, useEffect, useCallback } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { selectAll } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import identity from 'ramda/src/identity';
import { createPortal } from 'react-dom';
import { stack, stackOrderNone, stackOffsetNone, curveBasis, curveBasisClosed, curveBasisOpen, curveBundle, curveCardinal, curveCardinalClosed, curveCardinalOpen, curveCatmullRom, curveCatmullRomClosed, curveCatmullRomOpen, curveLinear, curveLinearClosed, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import compose from 'ramda/src/compose';
import groupBy from 'ramda/src/groupBy';
import prop from 'ramda/src/prop';
import toPairs from 'ramda/src/toPairs';
import head from 'ramda/src/head';
import max from 'ramda/src/max';
import min from 'ramda/src/min';
import find from 'ramda/src/find';
import filter from 'ramda/src/filter';
import sum from 'ramda/src/sum';
import map from 'ramda/src/map';
import reduce from 'ramda/src/reduce';
import values from 'ramda/src/values';
import uniq from 'ramda/src/uniq';
import always from 'ramda/src/always';
import complement from 'ramda/src/complement';
import addIndex from 'ramda/src/addIndex';
import mergeAll from 'ramda/src/mergeAll';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import T from 'ramda/src/T';
import sortBy from 'ramda/src/sortBy';
import splitEvery from 'ramda/src/splitEvery';
import styled from 'styled-components';
import last from 'ramda/src/last';

var GraphContext = createContext();

var idx = 0;
/**
 * The "stacked" charts use these values to generate both instances of the Y
 * axis.
 *
 * @param {Object} stack D3 stack object.
 * @param {Array} data Chart data list.
 * @returns {Array} The modified chart data list.
 */

var appendStackedValues = (function (stack, data) {
  stack.forEach(function (values) {
    data.forEach(function (datum) {
      if (values.key === datum.series) {
        datum.stackedValues = values[idx];
        idx += 1;
      }
    });
    idx = 0;
  });
  return data;
});

/**
 * The D3 stack function takes the list of the series in the chart data to
 * generate the stacks for the stacked charts.
 *
 * @param {Array} series List of series in the data.
 * @returns {Array} D3 stack.
 */

var buildStack = (function (series) {
  return stack().keys(series).order(stackOrderNone).offset(stackOffsetNone);
});

/**
 * The data must be ordered by series before the area is created.
 *
 * @param {Array} _ Chart data.
 * @returns {Function} Ordering function that returns a list ordered by data
 * series.
 */

var bySeries = compose(toPairs, groupBy(prop('series')));

/**
 * Use the series value to create a class to identify the element.
 *
 * @param {String} series Series name.
 * @returns {String} Classname.
 */
var classify = (function (series) {
  return series.replace(/ /g, '-').toLowerCase();
});

/**
 * Draw the chart's vertical or horizontal grid.
 *
 * @param {Boolean} horizontal Is the chart vertical or horizontal.
 * @param {Function} xScale D3 scale.
 * @param {Number} height Chart's available height.
 * @param {Function} yScale D3 scale.
 * @param {Number} width Chart's available width.
 * @param {Number} xAxisTicks Suggested value for the X axis ticks.
 * @param {Number} yAxisTicks Suggested value for the Y axis ticks.
 * @returns {Void}
 */

var drawGrid = (function (horizontal, xScale, height, yScale, width, xAxisTicks, yAxisTicks) {
  return horizontal ? axisBottom().scale(xScale).tickSize(height, 0, 0).ticks(xAxisTicks).tickFormat('') : axisLeft().scale(yScale).tickSize(-width, 0, 0).ticks(yAxisTicks).tickFormat('');
});

/**
 * Find the minimum and maximum value in a given list.
 *
 * @param {Array} xs List of values.
 * @returns {Array} Minimum and maximum value in the list.
 */

var extent = (function (xs) {
  return [getMin(xs), getMax(xs)];
});

var white = 'rgb(255, 255, 255)'; // #FFFFFF

var black = 'rgb(33, 33, 33)'; // #212121

var grey = 'rgb(232, 232, 232)'; // #E8E8E8

var tooltipBackground = 'rgba(0, 0, 0, 0.85)';
var themes = {
  monteCarlo: ['rgb(8,104,172)', 'rgb(67,162,202)', 'rgb(123,204,196)', 'rgb(186,228,188)', 'rgb(240,249,232)'],
  vividCerise: ['rgb(152,0,67)', 'rgb(221,28,119)', 'rgb(223,101,176)', 'rgb(215,181,216)', 'rgb(241,238,246)'],
  sundown: ['rgb(122,1,119)', 'rgb(197,27,138)', 'rgb(247,104,161)', 'rgb(251,180,185)', 'rgb(254,235,226)'],
  madang: ['rgb(0,104,55)', 'rgb(49,163,84)', 'rgb(120,198,121)', 'rgb(194,230,153)', 'rgb(255,255,204)'],
  curiousBlue: ['rgb(37,52,148)', 'rgb(44,127,184)', 'rgb(65,182,196)', 'rgb(161,218,180)', 'rgb(255,255,204)']
};
var palette = {
  white: white,
  black: black,
  grey: grey,
  themes: themes
};

/**
 * Use the first color in the color theme list to use it as base color.
 *
 * @param {Array} theme Color theme list
 * @returns {String} Color
 */

var getBaseColor = (function (theme) {
  return head(themes[theme]);
});

/**
 * You can generate a different color shade passing a second argument with the
 * amount to apply in order to make it darker or lighter.
 *
 * @param {String} rgb RGB color.
 * @param {Number} amt Amount to apply in order to make it darker or lighter.
 * @returns {String} RGB color.
 */
var getHoverColor = (function () {
  var rgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var amt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -20;
  return "rgb(".concat(rgb.split(/\D/).filter(function (x) {
    return x;
  }).map(function (x) {
    var val = parseInt(x) + amt;

    if (val > 255) {
      val = 255;
    } else if (val < 0) {
      val = 0;
    }

    return val;
  }).join(', '), ")");
});

var innerId = 0;
/**
 * Creates a unique ID for each chart of the same type rendered.
 *
 * @param {String} prefix Chart name.
 * @returns {String} ID
 */

var getId = (function (prefix) {
  if (!prefix) {
    return null;
  }

  var id = "silky-charts_".concat(prefix, "-").concat(innerId);
  innerId += 1;
  return id;
});

/**
 * Filter the data for the series selected to be represented as lines in the
 * chart.
 *
 * @param {Array} series List of series to filter form the chart data.
 * @param {Array} data Chart data list.
 * @returns {Array} Data to use as lines in the chart.
 */
var getLineDataForSeries = (function (series, data) {
  return series.map(function (x) {
    return data.filter(function (datum) {
      return datum.series === x;
    });
  });
});

var getMax = (function (xs) {
  return xs.reduce(max);
});

var getMin = (function (xs) {
  return xs.reduce(min);
});

var getMousePosition = (function (svg, _ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;

  var _point$matrixTransfor = point.matrixTransform(svg.getScreenCTM().inverse()),
      x = _point$matrixTransfor.x,
      y = _point$matrixTransfor.y;

  return [x, y];
});

var getNearestPoint = (function (axis, margin, positions) {
  var mouseAxis = axis - margin;
  var epsilon = (positions[1] - positions[0]) / 2;
  return find(function (x) {
    return Math.abs(x - mouseAxis) <= epsilon;
  }, positions);
});

var reducer = function reducer(a, _ref) {
  var name = _ref.name,
      value = _ref.value;
  a[name] = a[name] ? [].concat(_toConsumableArray(a[name]), [value]) : [value];
  return a;
};
/**
 * Using an optional list of series names calculate the largest possible values
 * adding the values for the series names provided plus the rest of the values
 * present in the data
 *
 * @param {Array} data Chart data
 * @param {Array} seriesList List of series names whose values will be added to
 * calculate the largest possible value
 * @returns {Array} List of calculated values
 */


var getStackedMax = (function (data) {
  var seriesList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return compose(map(sum), values, reduce(reducer, {}), seriesList.length ? filter(function (_ref2) {
    var series = _ref2.series;
    return seriesList.includes(series);
  }) : identity)(data);
});

/**
 * Get the list of series in the chart data.
 *
 * @param {Array} _ Chart data.
 * @returns {Function} Ordering function that returns a list of unique series
 * names.
 */

var getSeries = compose(uniq, map(prop('series')));

var ASPECT_RATIO = '16:9';
var MARGIN = {
  top: 40,
  right: 50,
  bottom: 50,
  left: 50
};
var ROTATION = -50;
var SIZE = {
  width: 0,
  height: 0,
  isSizeSet: false
};
var X_TICKS = 10;
var Y_TICKS = 5;
var TIME_FORMAT = '%a %d';
var TOOLTIP_DATE_FORMAT = '%b %d, %Y';
var TOOLTIP_OFFSET = 20;
var WIDTH = 640; // Scales
var SCALE_PADDING = 0.1;

var THEME = 'monteCarlo';
var SECONDARY_THEME = 'vividCerise'; // Line options

var LINE_STROKE_WIDTH = 3;
var LINE_TYPE = 'curveLinear';
var LINE_TYPES = {
  curveBasis: curveBasis,
  curveBasisClosed: curveBasisClosed,
  curveBasisOpen: curveBasisOpen,
  curveBundle: curveBundle,
  curveCardinal: curveCardinal,
  curveCardinalClosed: curveCardinalClosed,
  curveCardinalOpen: curveCardinalOpen,
  curveCatmullRom: curveCatmullRom,
  curveCatmullRomClosed: curveCatmullRomClosed,
  curveCatmullRomOpen: curveCatmullRomOpen,
  curveLinear: curveLinear,
  curveLinearClosed: curveLinearClosed,
  curveMonotoneX: curveMonotoneX,
  curveMonotoneY: curveMonotoneY,
  curveNatural: curveNatural,
  curveStep: curveStep,
  curveStepAfter: curveStepAfter,
  curveStepBefore: curveStepBefore
};

/**
 * Calculate the size of the chart using aspect-ratio, margins, and parent size.
 *
 * @param {Number} w1 Chart's width.
 * @param {Number} h1 Chart's height.
 * @param {Object} h1 Chart's margin.
 * @param {String} r Chart's aspect-ratio.
 * @returns {Object} Chart's width and height.
 */

var getSize = (function (w1, h1, _ref, r) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;

  var _r$split = r.split(':'),
      _r$split2 = _slicedToArray(_r$split, 2),
      r1 = _r$split2[0],
      r2 = _r$split2[1];

  var w2 = w1 || WIDTH;
  var h2 = h1 || w2 / r1 * r2;

  if (w1 && h1) {
    return {
      width: w1 - left - right,
      height: h1 - top - bottom
    };
  }

  var width = w1 ? w2 : h2 / r2 * r1;
  var height = h1 ? h2 : w2 / r1 * r2;
  return {
    width: width - left - right,
    height: height - top - bottom
  };
});

/**
 * Calculates the position of the tooltip based on the position specified in
 * the prop staticTooltip of use the default instead to position the tooltip
 * on top of the mouse cursor.
 *
 * @param {Object} node Graph's SVG node.
 * @param {Object} margin Chart's maring prop.
 * @param {Object} mousePosition PageX and PageY values returned by the
 * mouseMove event.
 * @param {Object} size Tooltip bubble width and height.
 * @param {String} position Position of the tooltip specified in the
 * staticTooltip prop.
 * @returns {Object} Object containing the top and left values to position the
 * tooltip.
 */

var getTooltipPosition = (function (node, margin, _ref, _ref2) {
  var pageX = _ref.pageX,
      pageY = _ref.pageY;
  var width = _ref2.width,
      height = _ref2.height;
  var position = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';

  var _node$getBoundingClie = node.getBoundingClientRect(),
      top = _node$getBoundingClie.top,
      right = _node$getBoundingClie.right,
      bottom = _node$getBoundingClie.bottom,
      left = _node$getBoundingClie.left;

  var leftOffset = always(left + margin.left + TOOLTIP_OFFSET);
  var topOffset = always(top + margin.top + TOOLTIP_OFFSET);
  var rightOffset = always(right - width - margin.right - TOOLTIP_OFFSET);
  var bottomOffset = always(bottom - height - margin.bottom - TOOLTIP_OFFSET);
  var positionMap = {
    'top-left': {
      left: leftOffset(),
      top: topOffset()
    },
    'top-right': {
      left: rightOffset(),
      top: topOffset()
    },
    'bottom-right': {
      left: rightOffset(),
      top: bottomOffset()
    },
    'bottom-left': {
      left: leftOffset(),
      top: bottomOffset()
    },
    default: {
      left: pageX - width / 2,
      top: pageY - height - 16
    }
  };
  return positionMap[position];
});

var isNotNaN = complement(isNaN);
/**
 * Validate if the string passed is a valid ISO string date.
 *
 * @param {String} _ ISO string date to validate.
 * @returns {Function} Validation function that returns true if the string is a
 * valid date.
 */

var isValidDate = compose(isNotNaN, Date.parse);

var mapIndexed = addIndex(map);
/**
 * Map all the series to a single name to be used by the tooltip group using the
 * name as a reference according to the mouse position.
 *
 * @param {Array} data Chart's data.
 * @param {Array} positions List of positions to map the data with.
 * @returns {Object} Mapped data.
 */

var mapTooltipData = (function (data, positions) {
  return compose(mergeAll, // eslint-disable-next-line no-unused-vars
  mapIndexed(function (_ref, idx) {
    var _ref2 = _slicedToArray(_ref, 2),
        _ = _ref2[0],
        x = _ref2[1];

    return _defineProperty({}, positions[idx], x);
  }), toPairs, groupBy(prop('name')))(data);
});

/**
 * Rotate the X axis labels to a given degrees.
 *
 * @param {String} id Unique chart ID.
 * @param {Number} deg Degrees to rotate.
 * @returns {Void}
 */

var rotateXLabels = (function (id, deg) {
  var isNegative = deg < 0;
  selectAll("#".concat(id, " .axis-x .tick text")).attr('text-anchor', isNegative ? 'end' : 'start').attr('transform', "translate(".concat(isNegative ? -12 : 12, ", 6) rotate(").concat(deg, ")"));
});

/**
 * Apply the option to the corresponding line type if exist.
 *
 * @param {String} type Line type.
 * @param {Number} option Option value.
 * @returns {Function} Line type setter.
 */

var setLineType = (function (type) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return cond([[equals('curveBundle'), function () {
    return LINE_TYPES[type].beta(option);
  }], [equals('curveCardinalOpen'), function () {
    return LINE_TYPES[type].tension(option);
  }], [equals('curveCatmullRomOpen'), function () {
    return LINE_TYPES[type].alpha(option);
  }], [T, function () {
    return LINE_TYPES[type];
  }]])(type);
});

/**
 * Validates if the values in the data's name fields are valid dates and if is
 * the case transform this dates into instances of Date before returning a tuple
 * with the validation result, the new data list, and the unique list of names.
 *
 * @param {Array} dataset Chart's data.
 * @returns {Array} Tupple containing the dates validation result, the
 * transformed new data list, and an array with the unique list of names.
 */

var setupData = (function (dataset) {
  var isDates = isValidDate(dataset[0].name);
  var names = uniq(dataset.map(function (_ref) {
    var name = _ref.name;
    return name;
  }));
  return [isDates, isDates ? dataset.map(function (x) {
    return _objectSpread({}, x, {
      name: new Date(x.name)
    });
  }) : dataset, isDates ? names.map(function (x) {
    return new Date(x);
  }) : names];
});

/**
 * Transforms a given data list to be consumed by the D3 stack function.
 *
 * @param {Array} data Chart's data list.
 * @returns {Array} Stacked formatted chart's data.
 */

var toStackedForm = (function (data) {
  return compose(map(mergeAll), splitEvery(getSeries(data).length), map(function (_ref) {
    var name = _ref.name,
        series = _ref.series,
        value = _ref.value;
    return _defineProperty({
      name: name
    }, series, value);
  }), sortBy(prop('name')))(data);
});

var AreaDatum = function AreaDatum(_ref) {
  var area = _ref.area,
      dataPositions = _ref.dataPositions,
      datum = _ref.datum,
      fillColor = _ref.fillColor,
      onClick = _ref.onClick,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      series = _ref.series,
      theme = _ref.theme,
      withTooltip = _ref.tooltip,
      tooltipData = _ref.tooltipData;

  var _useContext = useContext(GraphContext),
      margin = _useContext.margin,
      node = _useContext.node;

  var _useState = useState({
    pageX: null,
    pageY: null,
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      nearestPoint = _useState4[0],
      setNearestPoint = _useState4[1];

  var _useState5 = useState(tooltipData['0']),
      _useState6 = _slicedToArray(_useState5, 2),
      currentTooltipData = _useState6[0],
      setCurrentTooltipData = _useState6[1];

  var handleMouseMove = function handleMouseMove(nearest) {
    setNearestPoint(nearest);
    setCurrentTooltipData(tooltipData[nearest]);
  };

  return React.createElement(React.Fragment, null, React.createElement("g", {
    className: "".concat(classify(series), "-layer")
  }, React.createElement(Path, {
    chart: "stacked-area",
    fillColor: fillColor,
    d: area(datum),
    strokeWidth: 0,
    onClick: onClick,
    onMouseEnter: function onMouseEnter(event) {
      var pageX = event.pageX,
          pageY = event.pageY;
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          pageX: pageX,
          pageY: pageY,
          show: true
        });
      });

      _onMouseEnter(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          show: false
        });
      });

      _onMouseLeave(event);
    },
    onMouseMove: function onMouseMove(event) {
      var pageX = event.pageX,
          pageY = event.pageY;

      var _getMousePosition = getMousePosition(node, event),
          _getMousePosition2 = _slicedToArray(_getMousePosition, 1),
          x = _getMousePosition2[0];

      var nearest = getNearestPoint(x, margin.left, dataPositions);
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          pageX: pageX,
          pageY: pageY
        });
      });

      if (nearest !== nearestPoint && tooltipData[nearest]) {
        handleMouseMove(nearest);
      }
    }
  })), withTooltip && tooltip.show && createPortal(React.createElement(Tooltip, {
    mousePosition: tooltip
  }, React.createElement(TooltipGroup, {
    theme: theme,
    data: currentTooltipData
  })), document.body));
};

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Axis = styled.g.attrs(function (_ref) {
  var axis = _ref.axis,
      position = _ref.position;
  return {
    className: "axis-".concat(axis),
    transform: position && "translate(".concat(position.x, ", ").concat(position.y, ")")
  };
})(_templateObject());

var BarDatum = function BarDatum(_ref) {
  var color = _ref.color,
      datum = _ref.datum,
      height = _ref.height,
      onClick = _ref.onClick,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      withTooltip = _ref.tooltip,
      width = _ref.width,
      x = _ref.x,
      y = _ref.y;

  var _useState = useState({
    pageX: null,
    pageY: null,
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  return React.createElement(Fragment, null, React.createElement(Rect, {
    chart: "bar",
    fillColor: color,
    onClick: onClick,
    onMouseEnter: function onMouseEnter(event) {
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          show: true
        });
      });

      _onMouseEnter(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          show: false
        });
      });

      _onMouseLeave(event);
    },
    onMouseMove: function onMouseMove(event) {
      event.persist();
      var pageX = event.pageX,
          pageY = event.pageY;
      setTooltip(function (state) {
        return _objectSpread({}, state, {
          pageX: pageX,
          pageY: pageY
        });
      });
    },
    position: {
      x: x,
      y: y
    },
    size: {
      width: width,
      height: height
    }
  }), withTooltip && tooltip.show && createPortal(React.createElement(Tooltip, {
    mousePosition: tooltip
  }, React.createElement(TooltipItem, _extends({
    color: color
  }, datum))), document.body));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Circle = styled.circle.attrs(function (_ref) {
  var chart = _ref.chart;
  return {
    className: chart
  };
})(_templateObject$1(), function (_ref2) {
  var color = _ref2.color;
  return color;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var DataGroup = styled.g.attrs({
  className: 'dataviz-layer'
})(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  path {\n    stroke: transparent;\n  }\n\n  line {\n    stroke: ", ";\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Grid = styled.g.attrs(function () {
  return {
    className: 'grid'
  };
})(_templateObject$3(), palette.grey);

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.9em;\n  text-anchor: middle;\n  transform: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled.text.attrs(function (_ref) {
  var axis = _ref.axis,
      margin = _ref.margin,
      width = _ref.width,
      height = _ref.height;
  return {
    className: "".concat(axis, "-axis-label"),
    x: axis === 'x' ? width / 2 : 0 - height / 2,
    y: axis === 'x' ? height + margin.bottom - 30 : 34 - margin.left
  };
})(_templateObject$4(), function (_ref2) {
  var axis = _ref2.axis;
  return axis === 'y' && 'rotate(-90deg)';
});

var LineDatum = function LineDatum(_ref) {
  var chart = _ref.chart,
      color = _ref.color,
      d = _ref.d,
      data = _ref.data,
      onClick = _ref.onClick,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      withTooltip = _ref.tooltip,
      xScale = _ref.xScale,
      yScale = _ref.yScale;

  var _useState = useState({
    pageX: null,
    pageY: null,
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  return React.createElement(Fragment, null, React.createElement(Path, {
    chart: chart,
    d: d,
    strokeColor: color
  }), React.createElement("g", {
    className: "line-dot-group"
  }, data.map(function (_ref2, idx) {
    var name = _ref2.name,
        value = _ref2.value;
    return React.createElement(Circle, {
      key: idx,
      chart: chart,
      color: color,
      cx: xScale(name) + xScale.bandwidth() / 2,
      cy: yScale(value),
      r: 6,
      onClick: onClick,
      onMouseEnter: function onMouseEnter(event) {
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            show: true
          });
        });

        _onMouseEnter(event);
      },
      onMouseLeave: function onMouseLeave(event) {
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            show: false
          });
        });

        _onMouseLeave(event);
      },
      onMouseMove: function onMouseMove(event) {
        var pageX = event.pageX,
            pageY = event.pageY;
        setTooltip(function (state) {
          return _objectSpread({}, state, {
            name: name,
            pageX: pageX,
            pageY: pageY,
            value: value
          });
        });
      }
    });
  })), withTooltip && tooltip.show && createPortal(React.createElement(Tooltip, {
    mousePosition: tooltip
  }, React.createElement(TooltipItem, {
    color: color,
    name: tooltip.name,
    value: tooltip.value
  })), document.body));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var MainGroup = styled.g.attrs(function (_ref) {
  var _ref$margin = _ref.margin,
      left = _ref$margin.left,
      top = _ref$margin.top;
  return {
    className: 'silky-charts-container',
    transform: "translate(".concat(left, ", ").concat(top, ")")
  };
})(_templateObject$5());

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n  stroke: ", ";\n  stroke-width: ", ";\n  pointer-events: ", "\n\n  &:hover {\n    fill: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Path = styled.path.attrs(function (_ref) {
  var chart = _ref.chart;
  return {
    className: "line-path ".concat(chart)
  };
})(_templateObject$6(), function (_ref2) {
  var fillColor = _ref2.fillColor;
  return fillColor || 'none';
}, function (_ref3) {
  var strokeColor = _ref3.strokeColor;
  return strokeColor || 'none';
}, LINE_STROKE_WIDTH, function (_ref4) {
  var chart = _ref4.chart;
  return chart === 'bar-line' && 'none';
}, function (_ref5) {
  var chart = _ref5.chart,
      fillColor = _ref5.fillColor;
  return chart === 'stacked-area' && getHoverColor(fillColor);
});

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n\n  &:hover {\n    fill: ", ";\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Rect = styled.rect.attrs(function (_ref) {
  var chart = _ref.chart,
      _ref$position = _ref.position,
      x = _ref$position.x,
      y = _ref$position.y,
      _ref$size = _ref.size,
      height = _ref$size.height,
      width = _ref$size.width;
  return {
    className: chart,
    height: height,
    width: width,
    x: x,
    y: y
  };
})(_templateObject$7(), function (_ref2) {
  var fillColor = _ref2.fillColor;
  return fillColor;
}, function (_ref3) {
  var fillColor = _ref3.fillColor;
  return getHoverColor(fillColor);
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.7em;\n  font-style: italic;\n  text-anchor: end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Link = styled.a.attrs(function (_ref) {
  var href = _ref.href,
      target = _ref.target,
      title = _ref.title;
  return {
    className: "data-source-link",
    href: href,
    target: target,
    title: title
  };
})(_templateObject$8());
var Text = styled.text.attrs(function (_ref2) {
  var height = _ref2.height,
      margin = _ref2.margin,
      width = _ref2.width;
  return {
    className: "data-source",
    x: width,
    y: height + margin.bottom - 50
  };
})(_templateObject2());

var DataSource = function DataSource(_ref3) {
  var dataSource = _ref3.dataSource,
      height = _ref3.height,
      margin = _ref3.margin,
      width = _ref3.width;
  return typeof dataSource === 'string' ? React.createElement(Text, {
    height: height,
    margin: margin,
    width: width
  }, dataSource) : React.createElement(Link, dataSource, React.createElement(Text, {
    height: height,
    margin: margin,
    width: width
  }, dataSource.text));
};

var StackedBarDatum = function StackedBarDatum(_ref) {
  var height = _ref.height,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      series = _ref.series,
      theme = _ref.theme,
      tooltip = _ref.tooltip,
      x = _ref.x,
      y = _ref.y;
  return series.map(function (layer) {
    return React.createElement("g", {
      key: layer.index,
      className: "".concat(layer.key, "-layer")
    }, layer.map(function (datum, idx) {
      var value = last(datum) - head(datum);
      var name = datum.data.name;
      return React.createElement(BarDatum, {
        key: idx,
        color: palette.themes[theme][layer.index],
        datum: {
          name: name,
          value: value
        },
        height: height - y(value),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        tooltip: tooltip,
        width: x.bandwidth(),
        x: x(name),
        y: y(last(datum))
      });
    }));
  });
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  height: ", "px;\n  width: ", "px;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SVG = styled.svg.attrs(function (_ref) {
  var identifier = _ref.identifier;
  return {
    id: identifier,
    className: 'silky-charts',
    baseProfile: 'full',
    xmlns: 'http://www.w3.org/2000/svg'
  };
})(_templateObject$9(), function (_ref2) {
  var size = _ref2.size;
  return size.height;
}, function (_ref3) {
  var size = _ref3.size;
  return size.width;
});

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.2em;\n  text-anchor: middle;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Title = styled.text.attrs(function (_ref) {
  var margin = _ref.margin,
      width = _ref.width;
  return {
    className: "chart-title",
    x: width / 2,
    y: 50 - margin.top
  };
})(_templateObject$a());

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 10px;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  top: 0;\n  z-index: 1;\n\n  &:before {\n    content: '';\n    display: ", ";\n    width: 0;\n    height: 0;\n    position: absolute;\n    border-left: 8px solid transparent;\n    border-top: 8px solid ", ";\n    border-right: 8px solid transparent;\n    left: ", "px;\n    top: ", "px;\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var TooltipBubble = styled.div.attrs(function (_ref) {
  var position = _ref.position;
  return {
    className: 'silky-charts-tooltip',
    style: position
  };
})(_templateObject$b(), tooltipBackground, function (_ref2) {
  var staticTooltip = _ref2.staticTooltip;
  return staticTooltip ? 'none' : 'block';
}, tooltipBackground, function (_ref3) {
  var width = _ref3.width;
  return width / 2 - 8;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
});

var Tooltip = function Tooltip(_ref5) {
  var children = _ref5.children,
      mousePosition = _ref5.mousePosition;
  var tooltipRef = useRef();

  var _useContext = useContext(GraphContext),
      margin = _useContext.margin,
      node = _useContext.node,
      staticTooltip = _useContext.staticTooltip;

  var _useState = useState({
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var position = getTooltipPosition(node, margin, mousePosition, size, staticTooltip);
  useEffect(function () {
    var _tooltipRef$current = tooltipRef.current,
        offsetWidth = _tooltipRef$current.offsetWidth,
        offsetHeight = _tooltipRef$current.offsetHeight;
    setSize({
      width: offsetWidth,
      height: offsetHeight
    });
  }, [tooltipRef, setSize]);
  return React.createElement(TooltipBubble, _extends({
    ref: tooltipRef,
    position: position,
    staticTooltip: staticTooltip
  }, size), children);
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  font-weight: 500;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n  font-weight: 600;\n  padding: 2px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  text-align: right;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  margin-right: ", "px;\n  padding: 0 ", "px;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$c());
var Swatch = styled.span(_templateObject2$1(), function (_ref) {
  var swatchColor = _ref.swatchColor;
  return swatchColor || grey;
}, function (_ref2) {
  var marginRight = _ref2.marginRight;
  return marginRight;
}, function (_ref3) {
  var width = _ref3.width;
  return width / 2;
});
var Name = styled.div(_templateObject3());
var Data = styled.div(_templateObject4(), white);
var Divider = styled.span(_templateObject5());

var TooltipGroup = function TooltipGroup(_ref4) {
  var data = _ref4.data,
      _ref4$dateFormat = _ref4.dateFormat,
      dateFormat = _ref4$dateFormat === void 0 ? TOOLTIP_DATE_FORMAT : _ref4$dateFormat,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === void 0 ? 'monteCarlo' : _ref4$theme;
  var timeFormat$1 = timeFormat(dateFormat);
  var name = data[0].name;
  return React.createElement(React.Fragment, null, React.createElement(Name, null, isValidDate(name) ? timeFormat$1(name) : name), data.map(function (_ref5, idx) {
    var series = _ref5.series,
        value = _ref5.value;
    return React.createElement(Container, {
      key: idx
    }, React.createElement(Swatch, {
      swatchColor: themes[theme][idx],
      width: 6,
      marginRight: 2
    }), React.createElement(Swatch, {
      swatchColor: themes[theme][idx],
      width: 2,
      marginRight: 10
    }), React.createElement(Data, null, value, " ", React.createElement(Divider, null, "on"), " ", series));
  }));
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  font-weight: 500;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 4px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: block;\n  height: 2px;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var Swatch$1 = styled.span(_templateObject$d(), function (_ref) {
  var swatchColor = _ref.swatchColor;
  return swatchColor || grey;
});
var Data$1 = styled.div(_templateObject2$2(), white);
var Divider$1 = styled.span(_templateObject3$1());

var TooltipItem = function TooltipItem(_ref2) {
  var color = _ref2.color,
      _ref2$dateFormat = _ref2.dateFormat,
      dateFormat = _ref2$dateFormat === void 0 ? TOOLTIP_DATE_FORMAT : _ref2$dateFormat,
      name = _ref2.name,
      value = _ref2.value;
  var timeFormat$1 = timeFormat(dateFormat);
  return React.createElement(React.Fragment, null, React.createElement(Data$1, null, value, " ", React.createElement(Divider$1, null, "on"), ' ', isValidDate(name) ? timeFormat$1(name) : name), React.createElement(Swatch$1, {
    swatchColor: color
  }));
};

var useDebounce = (function (callback, delay, deps) {
  var _useRef = useRef(null),
      current = _useRef.current;

  var debouncedFunction = useCallback(callback, deps);
  useEffect(function () {
    return function () {
      clearTimeout(current);
    };
  }, [current]);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(current);
    current = setTimeout(function () {
      return debouncedFunction.apply(void 0, args);
    }, delay);
  };
});

var useResize = (function (responsive, handleSize) {
  var refSize = useRef(handleSize);
  var handleResize = useDebounce(handleSize, 250, [handleSize]);
  useEffect(function () {
    return refSize.current();
  }, [refSize]);
  useEffect(function () {
    responsive && window.addEventListener('resize', handleResize);
    return function () {
      responsive && window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, responsive]);
});

export { getId as a, SIZE as b, setupData as c, getMax as d, useResize as e, GraphContext as f, SVG as g, MainGroup as h, Grid as i, drawGrid as j, Title as k, Label as l, DataSource as m, DataGroup as n, BarDatum as o, getBaseColor as p, Axis as q, rotateXLabels as r, TIME_FORMAT as s, MARGIN as t, THEME as u, ROTATION as v, X_TICKS as w, SCALE_PADDING as x, Y_TICKS as y, getSize as z, ASPECT_RATIO as A, buildStack as B, toStackedForm as C, getStackedMax as D, setLineType as E, getLineDataForSeries as F, StackedBarDatum as G, LineDatum as H, palette as I, LINE_TYPE as J, SECONDARY_THEME as K, appendStackedValues as L, getSeries as M, extent as N, mapTooltipData as O, bySeries as P, AreaDatum as Q };
//# sourceMappingURL=chunk-bad7ef92.js.map
