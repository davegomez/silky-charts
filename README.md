# Silky Charts

A silky smooth D3/React chart library

[![NPM Version](https://img.shields.io/npm/v/silky-charts.svg)](https://www.npmjs.com/package/silky-charts)

+ [Silky Charts](#silky-charts)
  + [Features](#features)
  + [Roadmap](#roadmap)
  + [Installation](#installation)
    + [Peer Dependencies](#peer-dependencies)
  + [Basic Usage](#basic-usage)
  + [Common Props](#common-props)
  + [Color Themes](#color-themes)
  + [Bar Chart](#bar-chart)
    + [Data Definition](#data-definition)
    + [Props](#props)
  + [BarLine Chart](#barline-chart)
    + [Data Definition](#data-definition-1)
    + [Props](#props-1)

## Features

- Full React implementation (not a wrapper)
- Tree shaking and code splitting support
- Small and fast
- Customizable and easy to style
- Fully responsive
- Built in tooltips
- Choropleth color themes

## Roadmap

- [ ] Custom color themes support
- [ ] Styled Components themes support
- [ ] Empty and loading state

## Installation

Install Silky Charts using [Yarn](https://yarnpkg.com/en/)

```shell
yarn add silky-charts
```

Install Silky Charts using [npm](https://www.npmjs.com/)

```shell
npm install --save silky-charts
```

### Peer Dependencies

Silky Charts uses React `>= 16.8.0`, React DOM `>= 16.8.0`, and Styled Components `>= 4.1.3` as peer dependencies.

Install peer dependencies using Yarn

```shell
yarn add react react-dom styled-components
```

Install peer dependencies using npm

```shell
npm install --save react react-dom styled-components
```

## Basic Usage

```javascript
import Bar from 'silky-charts/Bar';
/* or */
import { Bar } from 'silky-charts';

...
    <Bar data={[ ... ]} />
...
```

## Common Props

Most props and options are present indistinguishable in all charts.

| Name                    |    Type    |    Defaults    | Description                                                                                                                       |
| ----------------------- | :--------: | :------------: | --------------------------------------------------------------------------------------------------------------------------------- |
| aspectRatio             |  `String`  |    `"16:9"`    | Sets the shape and size of the chart using the parent element width as a guide. Is overriden setting a `width` or `height` props. |
| data                    |  `Array`   |                | Chart data.                                                                                                                       |
| dateFormat              |  `String`  |   `"%a %d"`    | Name values as ISO dates will be formatted as dates. `[1]`                                                                        |
| grid                    | `Boolean`  |    `false`     | Display the chart's grid.                                                                                                         |
| height                  |  `Number`  |                | Sets the chart's height (breaks responsiveness).                                                                                  |
| margin                  | `{Number}` |                | Sets the margin sizes around the chart from an object with `top`, `right`, `bottom`, and `left` key-values `[2]`.                 |
| onClick                 | `Function` |                | Callback function to call during the onClick event.                                                                               |
| onMouseEnter            | `Function` |                | Callback function to call during the onMouseEnter event.                                                                          |
| onMouseLeave            | `Function` |                | Callback function to call during the OnMouseLeave event.                                                                          |
| padding                 |  `Number`  |     `0.1`      | Sets the padding between the chart bars.                                                                                          |
| responsive              | `Boolean`  |    `false`     | Activates the chart responsiveness feature.                                                                                       |
| theme                   |  `String`  | `"monteCarlo"` | Color theme name. [Color themes](#color-themes)                                                                                   |
| tooltip                 | `Boolean`  |    `false`     | Activates the built in tooltip.                                                                                                   |
| width                   |  `Number`  |     `640`      | Sets the chart's width.                                                                                                           |
| xAxisChartLabel         |  `String`  |                | Sets the Chart's X axis label (you might need to adjust the margin).                                                              |
| xAxisLabelRotation      | `Boolean`  |    `false`     | Rotates the X axis labels when these are to long to fit horizontally.                                                             |
| xAxisLabelRotationValue |  `Number`  |     `-50`      | Overrides the default X axis label rotation value.                                                                                |
| xAxisTicks              |  `Number`  |      `5`       | Sets the number of ticks of the x axis on the chart. `[3]`                                                                        |
| yAxisChartLabel         |  `String`  |                | Sets the Chart's Y axis label (you might need to adjust the margin).                                                              |
| yAxisTicks              |  `Number`  |      `5`       | Sets the number of ticks of the y axis on the chart. `[3]`                                                                        |

`[1]` The ISO dates will be formatted using [D3's date formatting rules](https://github.com/d3/d3-time-format).

`[2]` The default values for the margin `prop` is `{ top: 40, right: 50, bottom: 50, left: 50 }`.

`[3]` The specified count is only a hint; the scale may return more or fewer values depending on the domain. [Read more...](https://github.com/d3/d3-scale/blob/master/README.md#continuous_ticks)

## Color Themes

![Silky Charts Choropleth color themes](/color-themes.png)

## Bar Chart

[Demo](https://x7mr6l9omq.codesandbox.io/) - [Sandbox](https://codesandbox.io/s/x7mr6l9omq)

### Data Definition

```
[
  {
    name: String | Date {ISO String},
    value: Number,
  },
]
```

### Props

## BarLine Chart

[Demo](https://9oq4mx1z5y.codesandbox.io/) - [Sandbox](https://codesandbox.io/s/9oq4mx1z5y)

### Data Definition

```
[
  {
    name: String | Date {ISO String}, 
    series: String, 
    value: Number,
  },
]
```

### Props

| Name           |    Type    |    Defaults     | Description                                                                                       |
| -------------- | :--------: | :-------------: | ------------------------------------------------------------------------------------------------- |
| lineSeries     | `[String]` |                 | Series names of the datasets you want to appear as lines in the chart.                            |
| lineType       |  `String`  | `"curveLinear"` | Define the line style to use based on [D3 Curves](https://github.com/d3/d3-shape#curves) options. |
| lineTypeOption |  `String`  |                 | If the line style accepts options you can set it using this prop.                                 |
| secondaryTheme |  `String`  | `"vividCerise"` | Color theme for the chart lines. Hint: opposite colors have better contrast.                      |
| stackedSeries  | `[String]` |                 | Series names of the datasets you want to appear as stacked bars in the chart.                     |
