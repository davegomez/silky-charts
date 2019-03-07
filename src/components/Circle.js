import styled from 'styled-components';
import { white } from '../utils/palette';
import { LINE_STROKE_WIDTH } from '../utils/constants';

const Circle = styled.circle.attrs(({ chart }) => ({ className: chart }))`
  fill: ${white};
  stroke: ${({ strokeColor }) => strokeColor || 'none'};
  stroke-width: ${({ strokeWidth }) => strokeWidth || LINE_STROKE_WIDTH};
`;

export default Circle;
