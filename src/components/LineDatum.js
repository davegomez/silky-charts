import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Circle, Path, Tooltip, TooltipItem } from './';

const LineDatum = ({
  chart,
  color,
  d,
  data,
  margin,
  onClick,
  onMouseEnter,
  onMouseLeave,
  staticTooltip,
  svg,
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
      <Path chart={chart} d={d} strokeColor={color} />
      <g className="line-dot-group">
        {data.map(({ name, value }, idx) => (
          <Circle
            key={idx}
            chart={chart}
            color={color}
            cx={xScale(name) + xScale.bandwidth() / 2}
            cy={yScale(value)}
            r={6}
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
          />
        ))}
      </g>
      {withTooltip &&
        tooltip.show &&
        createPortal(
          <Tooltip
            margin={margin}
            mousePosition={tooltip}
            position={staticTooltip}
            svg={svg}
          >
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
