import React from 'react';
import styled from 'styled-components';
import pkg from '../../../package.json';

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  grid-area: header;
  justify-content: space-between;
  padding: 0 40px;
`;

const Title = styled.h1`
  margin: 0;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-left: 20px;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
`;

const Icon = styled.i.attrs({
  className: 'fab fa-github',
})`
  font-size: 36px;
`;

const Version = styled.span`
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--secondary-text);
  font-size: 14px;
  padding: 10px;
`;

const Header = () => (
  <Container>
    <Title>Silky Charts</Title>
    <List>
      <ListItem>
        <Version>v{pkg.version}</Version>
      </ListItem>
      <ListItem>
        <a
          href="https://github.com/davegomez/silky-charts"
          title="Silky Charts' GitHub repository"
        >
          <Icon />
        </a>
      </ListItem>
    </List>
  </Container>
);

export default Header;
