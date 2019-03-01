import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Path, Tooltip, TooltipGroup } from './';
import { classify, getMousePosition, getNearestPoint } from '../utils';

const AreaDatum = ({
  area,
  dataPositions,
  datum,
  fillColor,
  margin,
  onClick,
  onMouseEnter,
  onMouseLeave,
  series,
  staticTooltip,
  svg,
  theme,
  tooltip: withTooltip,
  tooltipData,
}) => {
  const [tooltip, setTooltip] = useState({
    pageX: null,
    pageY: null,
    show: false,
  });
  const [nearestPoint, setNearestPoint] = useState(0);
  const [currentTooltipData, setCurrentTooltipData] = useState(
    tooltipData['0']
  );

  const handleMouseMove = nearest => {
    setNearestPoint(nearest);
    setCurrentTooltipData(tooltipData[nearest]);
  };

  return (
    <>
      <g className={`${classify(series)}-layer`}>
        <Path
          chart="stacked-area"
          fillColor={fillColor}
          d={area(datum)}
          strokeWidth={0}
          onClick={onClick}
          onMouseEnter={event => {
            const { pageX, pageY } = event;
            setTooltip(state => ({ ...state, pageX, pageY, show: true }));
            onMouseEnter(event);
          }}
          onMouseLeave={event => {
            setTooltip(state => ({ ...state, show: false }));
            onMouseLeave(event);
          }}
          onMouseMove={event => {
            const { pageX, pageY } = event;
            const [x] = getMousePosition(svg, event);
            const nearest = getNearestPoint(x, margin.left, dataPositions);
            setTooltip(state => ({ ...state, pageX, pageY }));
            if (nearest !== nearestPoint && tooltipData[nearest]) {
              handleMouseMove(nearest);
            }
          }}
        />
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
            <TooltipGroup theme={theme} data={currentTooltipData} />
          </Tooltip>,
          document.body
        )}
    </>
  );
};

export default AreaDatum;
