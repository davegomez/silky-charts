import styled from 'styled-components';

const Axis = styled.g.attrs(({ axis, translate }) => ({
  className: `axis-${axis}`,
  transform: translate && `translate(${translate.x}, ${translate.y})`,
}))``;

export default Axis;
