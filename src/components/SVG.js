import styled from 'styled-components';

const SVG = styled.svg.attrs(({ identifier }) => ({
  id: identifier,
  className: 'silky-charts',
  baseProfile: 'full',
  xmlns: 'http://www.w3.org/2000/svg',
}))`
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;
`;

export default SVG;
