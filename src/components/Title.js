import styled from 'styled-components';

const Title = styled.text.attrs(({ margin, width }) => ({
  className: `chart-title`,
  x: width / 2,
  y: - margin.top / 2,
}))`
  font-size: 24px;
  text-anchor: middle;
`;

export default Title;
