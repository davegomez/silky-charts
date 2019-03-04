import styled from 'styled-components';
import { colorMod } from '../utils';

const Rect = styled.rect.attrs(
  ({ chart, position: { x, y }, size: { height, width } }) => ({
    className: chart,
    height,
    width,
    x,
    y,
  })
)`
  fill: ${({ fillColor }) => fillColor};

  &:hover {
    fill: ${({ fillColor }) => colorMod(fillColor)};
  }
`;

export default Rect;
