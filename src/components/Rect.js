import styled from 'styled-components';
import { getHoverColor } from '../utils';

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
    fill: ${({ fillColor }) => getHoverColor(fillColor)};
  }
`;

export default Rect;
