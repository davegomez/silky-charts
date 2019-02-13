import styled from 'styled-components';

const Title = styled.text.attrs(({ margin, width }) => ({
  className: `chart-title`,
  x: width / 2,
  y: 50 - margin.top,
}))`
  font-size: 1.5em;
  text-anchor: middle;
`;

export default Title;
