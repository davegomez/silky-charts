import styled from 'styled-components';
import { black, white } from '../../utils/palette';

const BarValue = styled.text.attrs(
  ({ position: { x, y }, size: { width, height } }) => ({
    className: 'value',
    textAnchor: 'middle',
    transform: `translate(${x + width / 2}, ${y + (height < 40 ? -18 : 30)})`,
  })
)`
  fill: ${({ size: { height } }) => (height < 40 ? black : white)};
  pointer-events: none;
`;

export default BarValue;
