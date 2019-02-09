import styled from 'styled-components';

export const InlineCode = styled.code`
  background-color: var(--color-blue-alpha);
  border-radius: 4px;
  color: var(--color-blue);
  padding: 4px;
  white-space: nowrap;
`;

export const Pre = styled.pre`
  background-color: var(--primary-text);
  border-right: 5px solid var(--color-red);
  color: var(--complement-text);
  margin-bottom: 40px;
  padding: 20px;
`;
