import styled from 'styled-components';
import { colorMod } from '../utils';
import {
  OUTLINE_FILL,
  OUTLINE_HOVER,
  OUTLINE_STROKE,
  LINE_STROKE_WIDTH,
} from '../utils/constants';

const Rect = styled.rect.attrs(
  ({ chart, position: { x, y }, size: { height, width } }) => ({
    className: chart,
    height,
    width,
    x,
    y,
  })
)`
  fill: ${({ fillColor, outlinedStyle }) =>
    outlinedStyle ? colorMod(fillColor, OUTLINE_FILL) : fillColor};
  stroke: ${({ fillColor, outlinedStyle }) =>
    outlinedStyle ? colorMod(fillColor, OUTLINE_STROKE) : null};
  stroke-width: ${({ outlinedStyle }) =>
    outlinedStyle ? LINE_STROKE_WIDTH : null};

  &:hover {
    fill: ${({ fillColor, outlinedStyle }) =>
      outlinedStyle ? colorMod(fillColor, OUTLINE_HOVER) : colorMod(fillColor)};
  }
`;

export default Rect;
