import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { NavList, NavListItem } from '../ui';

const Container = styled.div`
  background-color: var(--color-black);
  padding-top: 20px;
`;

const Navigation = ({ items, initialPath }) => {
  const [active, setActive] = useState(initialPath);

  return (
    <Container>
      <NavList>
        {items.map(({ title, pathname }, idx) => (
          <Link key={idx} to={pathname}>
            <NavListItem
              isActive={active === pathname}
              onClick={() => setActive(pathname)}
            >
              {title}
            </NavListItem>
          </Link>
        ))}
      </NavList>
    </Container>
  );
};

export default Navigation;
