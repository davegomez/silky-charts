import styled from 'styled-components';

const Title = styled.text.attrs(({ height, margin, width }) => ({
  className: `chart-title`,
  x: width / 2,
  y: 0 - margin.top / 1.5,
}))`
  font-size: 24px;
  text-anchor: middle;
`;

export default Title;
