import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Rect, Tooltip, TooltipItem } from './';

const BarDatum = ({
  color,
  datum,
  x,
  y,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
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
        position={{ x, y }}
        size={{ width, height }}
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
      />
      {tooltip.show &&
        createPortal(
          <Tooltip pageX={tooltip.pageX} pageY={tooltip.pageY}>
            <TooltipItem color={color} {...datum} />
          </Tooltip>,
          document.body
        )}
    </Fragment>
  );
};

export default BarDatum;
