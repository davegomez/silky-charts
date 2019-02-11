import styled from 'styled-components';

const Source = styled.text.attrs(({ height, margin, width }) => ({
  className: `chart-source`,
  x: width,
  y: height + margin.bottom / 2,
}))`
  font-size: 12px;
  font-style: italic;
  text-anchor: end;
`;

export default Source;
