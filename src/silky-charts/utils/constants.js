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

// Scales
export const SCALE_BAND = 'band';
export const SCALE_LINEAR = 'linear';
export const SCALE_TIME = 'time';

export const ASPECT_RATIO = '16:9';
export const MARGIN = { top: 40, right: 50, bottom: 50, left: 50 };
export const ROTATION = -50;
export const SIZE = {
  width: 0,
  height: 0,
  isSizeSet: false,
};
export const TICKS = 5;
export const WIDTH = 640;
export const DEBOUNCE = 200;

// Themes
export const THEME = 'tealBlue';
export const SECONDARY_THEME = 'pink';

export const LINE_STROKE_WIDTH = 3;
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
