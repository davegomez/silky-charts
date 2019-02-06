# Silky Charts

A silky smooth D3/React chart library

### Features

- Full React (not a wrapper)
- Tree shaking and code splitting support
- Small and fast
- Customizable and easy to style
- Fully responsive
- Built in tooltips
- Choropleth color schemes

## Installation

**Install with Yarn**

```shell
yarn add silky-charts
```

**Install with NPM**

```shell
npm install --save silky-charts
```

### Peer Dependencies

Silky Charts uses React `^16.8.0`, React DOM `^16.8.0`, and Styled Components `^4.1.3` as peer dependencies.

**Install peer dependencies with Yarn**

```shell
yarn add react react-dom styled-components
```

**Install peer dependencies with NPM**

```shell
npm install --save react react-dom styled-components
```

### Basic Usage

```javascript
import Bar from 'silky-charts/Bar';
/* or */
import { Bar } from 'silky-charts';

...
    <Bar data={[ ... ]} />
...
```
