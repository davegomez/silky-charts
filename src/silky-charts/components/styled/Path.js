import styled from 'styled-components';
import { LINE_STROKE_WIDTH } from '../../utils/constants';

const Path = styled.path`
  fill: ${({ fillColor }) => fillColor || 'none'};
  stroke: ${({ strokeColor }) => strokeColor || 'none'};
  stroke-width: ${LINE_STROKE_WIDTH};
`;

export default Path;
