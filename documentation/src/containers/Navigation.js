import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Container = styled.div`
  background-color: var(--color-black);
  padding-top: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
  }
`;

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

const Navigation = ({ items, initialPath }) => {
  const [active, setActive] = useState(initialPath);

  return (
    <Container>
      <List>
        {items.map(({ title, pathname }, idx) => (
          <Link key={idx} to={pathname}>
            <ListItem
              isActive={active === pathname}
              onClick={() => setActive(pathname)}
            >
              {title}
            </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
