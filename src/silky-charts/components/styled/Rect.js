import styled from 'styled-components';
import { theme } from '../../utils/palette';

const Rect = styled.rect.attrs(({ chart, position: { x, y } }) => ({
  x,
  y,
  className: chart,
}))`
  fill: ${({ color }) => theme[color].base};
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;

  &:hover {
    fill: ${({ color }) => theme[color].hover};
  }
`;

export default Rect;
