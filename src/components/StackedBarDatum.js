import React from 'react';
import head from 'ramda/src/head';
import last from 'ramda/src/last';
import BarDatum from './BarDatum';
import { palette, valueFor, getLength } from '../utils';

const StackedBarDatum = ({
  data,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
  series,
  theme,
  tooltip,
  width,
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
            color={palette.themes[theme].base[layer.index]}
            datum={{ name, value }}
            height={height - y(value)}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
