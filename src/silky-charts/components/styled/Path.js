import styled from 'styled-components';
import { LINE_STROKE_WIDTH } from '../../utils/constants';
import { className } from 'postcss-selector-parser';

const Path = styled.path.attrs(({ chart }) => ({ className: chart }))`
  fill: ${({ fillColor }) => fillColor || 'none'};
  stroke: ${({ strokeColor }) => strokeColor || 'none'};
  stroke-width: ${LINE_STROKE_WIDTH};
`;

export default Path;
