<div align="center">
  <h1>Silky Charts</h1>

  <img
    alt="Silky Charts"
    src="https://raw.githubusercontent.com/davegomez/silky-charts/master/assets/logo.jpg"
  />

  <p>A silky smooth D3/React chart library.</p>
</div>

<hr />

**Disclaimer**: Silky Charts is a work in progress, there is still many charts and features to add before is considered stable so the API is subject to change during its development.

<hr />

[![NPM Version](https://img.shields.io/npm/v/silky-charts.svg)](https://www.npmjs.com/package/silky-charts)
[![Travis CI Build](https://travis-ci.org/davegomez/silky-charts.svg?branch=master)](https://travis-ci.org/davegomez/silky-charts)
[![Bundlephobia minified](https://badgen.net/bundlephobia/min/silky-charts)](https://bundlephobia.com/result?p=silky-charts)
[![Bundlephobia minified + gzip](https://badgen.net/bundlephobia/minzip/silky-charts)](https://bundlephobia.com/result?p=silky-charts)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

+ [Features](#features)
+ [Roadmap](#roadmap)
+ [Installation](#installation)
  + [Peer dependencies](#peer-dependencies)
+ [Basic usage](#basic-usage)
+ [Common props](#common-props)
+ [Color themes](#color-themes)
+ [Bar chart](#bar-chart)
  + [Data definition](#data-definition)
  + [Props](#props)
+ [BarLine chart](#barline-chart)
  + [Data definition](#data-definition-1)
  + [Props](#props-1)
+ [Contributing](#contributing)
  + [How to use the playground](#how-to-use-the-playground)
  + [Create a Pull Request](#create-a-pull-request)
  + [Tests](#tests)
  + [Testing in your own app](#testing-in-your-own-app)
  + [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

### Peer dependencies

Silky Charts uses React `>= 16.8.0`, React DOM `>= 16.8.0`, and Styled Components `>= 4.1.3` as peer dependencies.

Install peer dependencies using Yarn

```shell
yarn add react react-dom styled-components
```

Install peer dependencies using npm

```shell
npm install --save react react-dom styled-components
```

## Basic usage

### From NPM

```javascript
import Bar from 'silky-charts/Bar';
/* or */
import { Bar } from 'silky-charts';

...
    <Bar data={[ ... ]} />
...
```

### In the browser with UNPKG
```html
<script src="https://unpkg.com/silky-charts@:version/umd/silky-charts.js"></script>
```

## Common props

Most props and options are present indistinguishable in all charts.

| Name                    |       Type        |    Default     | Description                                                                                                                       |
| ----------------------- | :---------------: | :------------: | --------------------------------------------------------------------------------------------------------------------------------- |
| aspectRatio             |     `String`      |    `"16:9"`    | Sets the shape and size of the chart using the parent element width as a guide. Is overriden setting a `width` or `height` props. |
| data                    |      `Array`      |                | Chart data.                                                                                                                       |
| dataSource              | `String` `Object` |                | Sets the data source label on the chart's bottom right corner with optional link `[3]`.                                           |
| dateFormat              |     `String`      |   `"%a %d"`    | Name values as ISO dates will be formatted as dates. `[1]`                                                                        |
| grid                    |     `Boolean`     |    `false`     | Display the chart's grid.                                                                                                         |
| height                  |     `Number`      |                | Sets the chart's height (breaks responsiveness).                                                                                  |
| margin                  |     `Object`      |                | Sets the margin sizes around the chart from an object with `top`, `right`, `bottom`, and `left` key-values `[2]`.                 |
| onClick                 |    `Function`     |                | Callback function to call during the onClick event.                                                                               |
| onMouseEnter            |    `Function`     |                | Callback function to call during the onMouseEnter event.                                                                          |
| onMouseLeave            |    `Function`     |                | Callback function to call during the OnMouseLeave event.                                                                          |
| responsive              |     `Boolean`     |    `false`     | Activates the chart responsiveness feature.                                                                                       |
| theme                   |     `String`      | `"monteCarlo"` | Color theme name. [Color themes](#color-themes)                                                                                   |
| tooltip                 |     `Boolean`     |    `false`     | Activates the built in tooltip.                                                                                                   |
| title                   |     `String`      |                | Sets the title of the chart.                                                                                                      |
| width                   |     `Number`      |     `640`      | Sets the chart's width.                                                                                                           |
| xAxisChartLabel         |     `String`      |                | Sets the Chart's X axis label (you might need to adjust the margin).                                                              |
| xAxisLabelRotation      |     `Boolean`     |    `false`     | Rotates the X axis labels when these are to long to fit horizontally.                                                             |
| xAxisLabelRotationValue |     `Number`      |     `-50`      | Overrides the default X axis label rotation value.                                                                                |
| xAxisTicks              |     `Number`      |      `5`       | Sets the number of ticks of the x axis on the chart. `[4]`                                                                        |
| yAxisChartLabel         |     `String`      |                | Sets the Chart's Y axis label (you might need to adjust the margin).                                                              |
| yAxisTicks              |     `Number`      |      `5`       | Sets the number of ticks of the y axis on the chart. `[4]`                                                                        |

- `[1]` The ISO dates will be formatted using [D3's date formatting rules](https://github.com/d3/d3-time-format).
- `[2]` The default values for the margin `prop` is `{ top: 40, right: 50, bottom: 50, left: 50 }`.
- `[3]` If you want to display the data source label as a link you can pass an object with `{ href, target, text, title }` instead.
- `[4]` The specified count is only a hint; the scale may return more or fewer values depending on the domain. [Read more...](https://github.com/d3/d3-scale/blob/master/README.md#continuous_ticks)

## Color themes

![Silky Charts Choropleth color themes](/assets/color-themes.jpg)

## Bar chart

[Demo](https://x7mr6l9omq.codesandbox.io/) - [Sandbox](https://codesandbox.io/s/x7mr6l9omq)

### Data definition

```
[
  {
    name: String | Date {ISO String},
    value: Number,
  },
]
```

### Props

| Name    |   Type   | Default | Description                              |
| ------- | :------: | :-----: | ---------------------------------------- |
| padding | `Number` |  `0.1`  | Sets the padding between the chart bars. |

## BarLine chart

[Demo](https://9oq4mx1z5y.codesandbox.io/) - [Sandbox](https://codesandbox.io/s/9oq4mx1z5y)

### Data definition

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

| Name           |    Type    |     Default     | Description                                                                                       |
| -------------- | :--------: | :-------------: | ------------------------------------------------------------------------------------------------- |
| lineSeries     | `[String]` |                 | Series names of the datasets you want to appear as lines in the chart.                            |
| lineType       |  `String`  | `"curveLinear"` | Define the line style to use based on [D3 Curves](https://github.com/d3/d3-shape#curves) options. |
| lineTypeOption |  `String`  |                 | If the line style accepts options you can set it using this prop.                                 |
| padding        |  `Number`  |      `0.1`      | Sets the padding between the chart bars.                                                          |
| secondaryTheme |  `String`  | `"vividCerise"` | Color theme for the chart lines. Hint: opposite colors have better contrast.                      |
| stackedSeries  | `[String]` |                 | Series names of the datasets you want to appear as stacked bars in the chart.                     |

## StackedArea chart

[Demo](https://z2m6pjj6nl.codesandbox.io/) - [Sandbox](https://codesandbox.io/s/z2m6pjj6nl)

### Data definition

```
[
  {
    name: Date {ISO String}, 
    series: String, 
    value: Number,
  },
]
```

### Props

| Name           |   Type   |     Default     | Description                                                                                       |
| -------------- | :------: | :-------------: | ------------------------------------------------------------------------------------------------- |
| lineType       | `String` | `"curveLinear"` | Define the line style to use based on [D3 Curves](https://github.com/d3/d3-shape#curves) options. |
| lineTypeOption | `String` |                 | If the line style accepts options you can set it using this prop.                                 |

### Roadmap

- [ ] Tooltip support

## Contributing

- [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then clone it to your local device
- Install yarn: `npm install -g yarn` | [yarn installation](https://yarnpkg.com/en/docs/instal)
- Install the dependencies: `yarn`
- Link Silky Charts: `yarn link`
- Run `yarn dev` to build and watch for code changes
- Get into the Playground: `cd playground`
- Install the dependencies: `yarn`
- Link to Silky Charts: `yarn link silky-charts`
- Start the playground: `yarn start`

### How to use the playground

Once you are in the playground you will find a React application created with [RCA](https://facebook.github.io/create-react-app/). The App structure is the following:

```
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── components
│   │   ├── ChartContainer.js
│   │   └── Container.js
│   ├── data.js
│   ├── index.js
│   └── styles.css
└── yarn.lock
```

After installing all the dependencies you will be able to start the application and use the `App.js` to play with the current charts or test new ones. The App file is already importing all the charts available and the example data sets included in the application for testing purposes, and is also already rendering one of the charts with most common props already defined and comment out to make it easier to test these.

There is also a `data.js` that contains all the testing data sets. Use this data set to test your charts and add new ones if you need them for your new chart or just for testing the current ones and include them in your pull request.

### Create a Pull Request

Silky Charts uses [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) in its repository, so if you want to contribute and publish a pull request please create a `feature` branch out of `develop` with a name describing you change or feature and create the pull request pointing back to the `develop` branch.

- `git flow feature start <feature-name>`
- Make your changes and commit them
- Run the tests with `yarn test` or `npm run tests`
- Add unit tests and fix the linting issues and broken tests
- [Create the pull request](https://help.github.com/articles/creating-a-pull-request/).

### Tests

To lint your code:

```
yarn lint
```

To run the test suite:

```
yarn test
```

### Testing in your own app

If you haven't yet, follow the first five steps described in [Contributing to Silky Charts](#contributing-to-silky-charts) then inside your project directory:

- Link to Silky Charts: `yarn link silky-charts`

And start coding...

### Troubleshooting

- When you use bundlers like Webpack and Parcel you might encounter some issues related with Hooks throwing an error that says "`Hooks can only be called inside the body of a function component`". This problem is caused by a [duplicate React in your bundle](https://github.com/facebook/react/issues/14721#issuecomment-458757426) and you have to follow this [workaround](https://github.com/facebook/react/issues/13991#issuecomment-462090853) to make it work. -- Use this [package.json]('./playground/package.json) file as an example.
