import React from 'react';
import styled from 'styled-components';
import Introduction from '../docs/introduction.md';
import { InlineCode, Pre } from '../ui';

const Title = styled.h2`
  margin-bottom: 0;
`;

const Slogan = styled.p`
  color: var(--secondary-text);
  font-style: italic;
  margin: 0 0 20px;
`;

export default () => (
  <>
    <Title>Getting Started with Silky Charts</Title>
    <Slogan>A silky smooth D3/React chart library</Slogan>
    <Introduction components={{ inlineCode: InlineCode, pre: Pre }} />
  </>
);
