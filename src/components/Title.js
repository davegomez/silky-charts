import styled from 'styled-components';

const Title = styled.text.attrs(({ height, margin, width }) => ({
  className: `chart-title`,
  x: width / 2,
  y: 0 - margin.top / 2,
}))`
  font-size: 1.5em;
  text-anchor: middle;
`;

export default Title;
