import {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBundle,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveLinear,
  curveLinearClosed,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
} from 'd3-shape';

// Base values
export const ASPECT_RATIO = '16:9';
export const MARGIN = { top: 40, right: 50, bottom: 50, left: 50 };
export const ROTATION = -50;
export const SIZE = {
  width: 0,
  height: 0,
};
export const X_TICKS = 10;
export const Y_TICKS = 5;
export const TIME_FORMAT = '%a %d';
export const TOOLTIP_DATE_FORMAT = '%b %d, %Y';
export const TOOLTIP_OFFSET = 20;
export const WIDTH = 640;

// Scales
export const SCALE_BAND = 'band';
export const SCALE_LINEAR = 'linear';
export const SCALE_PADDING = 0.15;
export const SCALE_TIME = 'time';

// Themes
export const THEME = 'monteCarlo';
export const SECONDARY_THEME = 'vividCerise';
export const OUTLINE_FILL = 50;
export const OUTLINE_HOVER = 30;
export const OUTLINE_STROKE = -20;

// Line options
export const LINE_STROKE_WIDTH = 2;
export const LINE_TYPE = 'curveLinear';
export const LINE_TYPES = {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBundle,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveLinear,
  curveLinearClosed,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
};
