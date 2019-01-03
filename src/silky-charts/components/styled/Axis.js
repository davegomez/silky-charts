import styled from 'styled-components';

const Axis = styled.g.attrs(({ axis, position }) => ({
  className: `axis-${axis}`,
  transform: position && `translate(${position.x}, ${position.y})`,
}))``;

export default Axis;
