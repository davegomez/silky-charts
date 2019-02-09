import styled from 'styled-components';

const tableFallback = `
    & {
        border-collapse: separate;
        border-spacing: 0;
    }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 40px;

  /* Firefox */
  @-moz-document url-prefix() {
    ${tableFallback}
  }

  /* Microsoft IE10 and above */
  @media all and (-ms-high-contrast: none) {
    ${tableFallback}
  }

  /* Microsoft Edge */
  @supports (-ms-ime-align: auto) {
    ${tableFallback}
  }
`;

export const Td = styled.td`
  border-bottom: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  padding: 8px;
  vertical-align: baseline;
`;
