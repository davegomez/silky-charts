import React from 'react';
import head from 'ramda/src/head';
import last from 'ramda/src/last';
import BarDatum from './BarDatum';
import { palette } from '../utils';

const StackedBarDatum = ({
  height,
  margin,
  onClick,
  onMouseEnter,
  onMouseLeave,
  series,
  svg,
  staticTooltip,
  theme,
  tooltip,
  x,
  y,
}) =>
  series.map(layer => (
    <g key={layer.index} className={`${layer.key}-layer`}>
      {layer.map((datum, idx) => {
        const value = last(datum) - head(datum);
        const name = datum.data.name;

        return (
          <BarDatum
            key={idx}
            color={palette.themes[theme][layer.index]}
            datum={{ name, value }}
            height={height - y(value)}
            margin={margin}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            svg={svg}
            staticTooltip={staticTooltip}
            tooltip={tooltip}
            width={x.bandwidth()}
            x={x(name)}
            y={y(last(datum))}
          />
        );
      })}
    </g>
  ));

export default StackedBarDatum;
