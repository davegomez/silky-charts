import styled from 'styled-components';
import { getHoverColor } from '../utils';

const Rect = styled.rect.attrs(({ chart, position: { x, y } }) => ({
  x,
  y,
  className: chart,
}))`
  fill: ${({ fillColor }) => fillColor};
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;

  &:hover {
    fill: ${({ fillColor }) => getHoverColor(fillColor)};
  }
`;

export default Rect;
