import React from 'react';
import head from 'ramda/src/head';
import last from 'ramda/src/last';
import BarDatum from './BarDatum';
import { palette, valueFor } from '../../utils';

const StackedBarDatum = ({
  data,
  series,
  onClick,
  isDates,
  theme,
  x,
  y,
  width,
  height,
}) =>
  series.map(layer => (
    <g key={layer.index} className={`${layer.key}-layer`}>
      {layer.map((datum, idx) => {
        const value = last(datum) - head(datum);
        return (
          <BarDatum
            key={idx}
            datum={{ value }}
            x={
              isDates
                ? x(new Date(datum.data.name)) -
                  valueFor('x', width, data.length)
                : x(datum.data.name)
            }
            y={y(last(datum))}
            width={
              isDates ? valueFor('width', width, data.length) : x.bandwidth()
            }
            height={height - y(value)}
            color={palette.themes[theme].base[layer.index]}
            onClick={onClick}
          />
        );
      })}
    </g>
  ));

export default StackedBarDatum;
