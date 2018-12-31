// @flow
import * as React from 'react';
import { romanNotation } from './charts/helpers';

type Margin = {
  top: number,
  right: number,
  bottom: number,
  left: number,
};

type Size = {
  height: number,
  width: number,
};

export type BarDatum = {
  name: string,
  value: number,
};

export type Bar = {
  currencyShortNotation?: boolean,
  data: BarDatum[],
  grid?: boolean,
  horizontal?: boolean,
  margin?: Margin,
  ref: React.Node,
  referenceLine?: boolean,
  shortNotation?: boolean,
  size: Size,
  source?: string,
  title?: string,
  valueOnBars?: boolean,
  xAxisLabel?: string,
  xAxisLabelRotationValue?: number,
  yAxisLabel?: string,
};
