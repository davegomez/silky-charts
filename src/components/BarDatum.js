import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Rect, Tooltip, TooltipItem } from './';

const BarDatum = ({
  color,
  datum,
  height,
  margin,
  onClick,
  onMouseEnter,
  onMouseLeave,
  tooltip: withTooltip,
  width,
  x,
  y,
}) => {
  const [tooltip, setTooltip] = useState({
    pageX: null,
    pageY: null,
    show: false,
  });

  return (
    <Fragment>
      <Rect
        chart="bar"
        fillColor={color}
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
          setTooltip(state => ({ ...state, pageX, pageY }));
        }}
        position={{ x, y }}
        size={{ width, height }}
      />
      {withTooltip &&
        tooltip.show &&
        createPortal(
          <Tooltip margin={margin} mousePosition={tooltip}>
            <TooltipItem color={color} {...datum} />
          </Tooltip>,
          document.body
        )}
    </Fragment>
  );
};

export default BarDatum;
