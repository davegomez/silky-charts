import styled from 'styled-components';
import { getHoverColor } from '../utils';
import { LINE_STROKE_WIDTH } from '../utils/constants';

const Path = styled.path.attrs(({ chart }) => ({ className: chart }))`
  fill: ${({ fillColor }) => fillColor || 'none'};
  stroke: ${({ strokeColor }) => strokeColor || 'none'};
  stroke-width: ${LINE_STROKE_WIDTH};
  pointer-events: ${({ chart }) => chart === 'bar-line' && 'none'}

  &:hover {
    fill: ${({ chart, fillColor }) =>
      chart === 'stacked-area' && getHoverColor(fillColor)};
  }
`;

export default Path;
