import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Circle, Path, Tooltip, TooltipItem } from './';

const LineDatum = ({
  chart,
  color,
  d,
  data,
  onClick,
  onMouseEnter,
  onMouseLeave,
  tooltip: withTooltip,
  xScale,
  yScale,
}) => {
  const [tooltip, setTooltip] = useState({
    pageX: null,
    pageY: null,
    show: false,
  });

  return (
    <Fragment>
      <Path chart={chart} d={d} strokeColor={color} strokeWidth={2} />
      <g className="line-dot-group">
        {data.map(({ name, value }, idx) => (
          <Circle
            key={idx}
            chart={chart}
            cx={xScale(name) + xScale.bandwidth() / 2}
            cy={yScale(value)}
            r={5}
            onClick={onClick}
            onMouseEnter={event => {
              setTooltip(state => ({ ...state, show: true }));
              onMouseEnter(event);
            }}
            onMouseLeave={event => {
              setTooltip(state => ({ ...state, show: false }));
              onMouseLeave(event);
            }}
            onMouseMove={event => {
              const { pageX, pageY } = event;
              setTooltip(state => ({ ...state, name, pageX, pageY, value }));
            }}
            strokeColor={color}
            strokeWidth={2}
          />
        ))}
      </g>
      {withTooltip &&
        tooltip.show &&
        createPortal(
          <Tooltip mousePosition={tooltip}>
            <TooltipItem
              color={color}
              name={tooltip.name}
              value={tooltip.value}
            />
          </Tooltip>,
          document.body
        )}
    </Fragment>
  );
};

export default LineDatum;
