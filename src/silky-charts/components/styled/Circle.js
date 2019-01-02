import styled from 'styled-components';
import { white } from '../../utils/palette';
import { LINE_STROKE_WIDTH } from '../../utils/constants';

const Circle = styled.circle.attrs(({ cx, cy, r }) => ({ cx, cy, r }))`
  cursor: pointer;
  fill: ${white};
  stroke: ${({ color }) => color};
  stroke-width: ${LINE_STROKE_WIDTH};
`;

export default Circle;
