import styled from 'styled-components';
import { colorMod } from '../utils';
import {
  LINE_STROKE_WIDTH,
  OUTLINE_FILL,
  OUTLINE_STROKE,
} from '../utils/constants';

const Path = styled.path.attrs(({ chart }) => ({
  className: `line-path ${chart}`,
}))`
  fill: ${({ fillColor, outlinedStyle }) =>
    outlinedStyle ? colorMod(fillColor, OUTLINE_FILL) : fillColor || 'none'};
  stroke: ${({ fillColor, strokeColor, outlinedStyle }) =>
    outlinedStyle
      ? colorMod(strokeColor || fillColor, OUTLINE_STROKE)
      : strokeColor || fillColor};
  stroke-width: ${LINE_STROKE_WIDTH};
  pointer-events: ${({ chart }) => chart === 'combination' && 'none'}

  &:hover {
    fill: ${({ chart, fillColor }) =>
      chart === 'stacked-area' && colorMod(fillColor)};
  }
`;

export default Path;
