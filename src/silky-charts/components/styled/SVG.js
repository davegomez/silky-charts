import styled from 'styled-components';

const SVG = styled.svg.attrs(({ identifier }) => ({
  id: identifier,
  className: 'silky-charts',
}))`
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;
`;

export default SVG;
