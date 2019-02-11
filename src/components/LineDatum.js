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
      <Path chart={chart} d={d} className="line-path" strokeColor={color} />
      <g className="line-dot-group">
        {data.map(({ name, value }, idx) => (
          <Circle
            key={idx}
            chart="bar-line"
            strokeColor={color}
            cx={xScale(name) + xScale.bandwidth() / 2}
            cy={yScale(value)}
            r={4}
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
              event.persist();
              const { pageX, pageY } = event;
              setTooltip(state => ({ ...state, name, pageX, pageY, value }));
            }}
          />
        ))}
      </g>
      {withTooltip &&
        tooltip.show &&
        createPortal(
          <Tooltip pageX={tooltip.pageX} pageY={tooltip.pageY}>
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
