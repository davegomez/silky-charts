import styled from 'styled-components';

const Source = styled.text.attrs(({ height, margin, width }) => ({
  className: `chart-source`,
  x: width,
  y: height + margin.bottom - 50,
}))`
  font-size: 0.8em;
  font-style: italic;
  text-anchor: end;
`;

export default Source;
