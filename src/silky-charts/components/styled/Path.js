import styled from 'styled-components';
import { LINE_STROKE_WIDTH } from '../../utils/constants';

const Path = styled.path`
  fill: none;
  pointer-events: none;
  stroke: ${({ color }) => color};
  stroke-width: ${LINE_STROKE_WIDTH};
`;

export default Path;
