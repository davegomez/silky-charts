import React from 'react';
import head from 'ramda/src/head';
import last from 'ramda/src/last';
import BarDatum from './BarDatum';
import { palette, valueFor, getLength } from '../utils';

const StackedBarDatum = ({
  data,
  series,
  onClick,
  onMouseEnter,
  onMouseLeave,
  theme,
  tooltip,
  x,
  y,
  width,
  height,
}) =>
  series.map(layer => (
    <g key={layer.index} className={`${layer.key}-layer`}>
      {layer.map((datum, idx) => {
        const value = last(datum) - head(datum);
        const name = datum.data.name;

        return (
          <BarDatum
            key={idx}
            datum={{ name, value }}
            x={x(name)}
            y={y(last(datum))}
            width={x.bandwidth()}
            height={height - y(value)}
            color={palette.themes[theme].base[layer.index]}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            tooltip={tooltip}
          />
        );
      })}
    </g>
  ));

export default StackedBarDatum;
