import React from 'react';
import styled from 'styled-components';

const Link = styled.a.attrs(({ href, target, title }) => ({
  className: `data-source-link`,
  href,
  target,
  title,
}))`
  text-decoration: underline;
`;

const Text = styled.text.attrs(({ height, margin, width }) => ({
  className: `data-source`,
  x: width,
  y: height + margin.bottom - 50,
}))`
  font-size: 0.7em;
  font-style: italic;
  text-anchor: end;
`;

const DataSource = ({ dataSource, height, margin, width }) =>
  typeof dataSource === 'string' ? (
    <Text height={height} margin={margin} width={width}>
      {dataSource}
    </Text>
  ) : (
    <Link {...dataSource}>
      <Text height={height} margin={margin} width={width}>
        {dataSource.text}
      </Text>
    </Link>
  );

export default DataSource;
