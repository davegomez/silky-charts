import React, { useContext } from 'react';
import styled from 'styled-components';
import { select as d3Select } from 'd3-selection';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import { GraphContext } from '../contexts';
import { d3Axis, rotateXLabels } from '../utils';

const Group = styled.g.attrs(({ axis, position }) => ({
  className: `axis-${axis}`,
  transform: position && `translate(${position.x}, ${position.y})`,
}))``;

const Axis = ({ axis, axisTicks, position, orientation, scale, toDate }) => {
  const {
    dateFormat,
    xAxisLabelRotation,
    xAxisLabelRotationValue,
  } = useContext(GraphContext);
  const timeFormat = d3TimeFormat(dateFormat);
  const buildAxis = node => {
    d3Select(node).call(
      d3Axis(orientation, scale)
        .ticks(axisTicks)
        .tickFormat(toDate ? timeFormat : null)
    );
    xAxisLabelRotation && rotateXLabels(node, xAxisLabelRotationValue);
  };

  return <Group axis={axis} position={position} ref={buildAxis} />;
};

export default Axis;
