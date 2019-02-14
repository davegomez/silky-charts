import styled from 'styled-components';

const Circle = styled.circle.attrs(({ chart }) => ({ className: chart }))`
  fill: ${({ color }) => color};
`;

export default Circle;
