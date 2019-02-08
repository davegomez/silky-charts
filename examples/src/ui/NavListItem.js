import styled from 'styled-components';

const ListItem = styled.li`
  background-color: ${({ isActive }) => (isActive ? 'rgba(0, 122, 255)' : '')};
  color: var(--complement-text);
  font-size: 18px;
  font-weight: 300;
  padding: 10px 10px 10px 20px;
  width: 100%;

  :hover {
    background-color: ${({ isActive }) =>
      !isActive ? 'var(--color-blue)' : ''};
    cursor: ${({ isActive }) => (!isActive ? 'pointer' : '')};
  }
`;

export default ListItem;
