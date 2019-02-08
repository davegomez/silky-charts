import styled from 'styled-components';

const ListItem = styled.li`
  background-color: ${({ isActive }) => (isActive ? 'rgba(0, 122, 255)' : '')};
  color: var(--complement-text);
  font-size: 20px;
  font-weight: 300;
  padding: 16px 10px 16px 20px;
  width: 100%;

  :hover {
    background-color: ${({ isActive }) =>
      !isActive ? 'rgb(88, 86, 214)' : ''};
    cursor: ${({ isActive }) => (!isActive ? 'pointer' : '')};
  }
`;

export default ListItem;
