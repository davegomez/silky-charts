import styled from 'styled-components';
import { colorMod } from '../utils';
import { LINE_STROKE_WIDTH } from '../utils/constants';

const Path = styled.path.attrs(({ chart }) => ({
  className: `line-path ${chart}`,
}))`
  fill: ${({ fillColor }) => fillColor || 'none'};
  stroke: ${({ strokeColor }) => strokeColor || 'none'};
  stroke-width: ${({ strokeWidth }) => strokeWidth || LINE_STROKE_WIDTH};
  pointer-events: ${({ chart }) => chart === 'bar-line' && 'none'}

  &:hover {
    fill: ${({ chart, fillColor }) =>
      chart === 'stacked-area' && colorMod(fillColor)};
  }
`;

export default Path;
