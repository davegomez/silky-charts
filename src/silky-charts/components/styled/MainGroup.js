import styled from 'styled-components';

const MainGroup = styled.g.attrs(({ margin: { left, top } }) => ({
  className: 'silky-charts-container',
  transform: `translate(${left}, ${top})`,
}))``;

export default MainGroup;
