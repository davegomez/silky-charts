| Name                    | Type         | Default   | Description                                                                                                                                     |
| ----------------------- | ------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| aspectRatio             | `String`     | `"16:9"`  | Sets the shape and size of the chart using the parent element width as a guide. Is overriden setting a `width` or `height` props.               |
| data                    | `Array`      |           | Chart data.                                                                                                                                     |
| dateFormat              | `String`     | `"%a %d"` | If the name value in the data object is a date this will be formatted using [D3's date formatting rules](https://github.com/d3/d3-time-format). |
| grid                    | `Boolean`    | `false`   | Display the chart's grid.                                                                                                                       |
| height                  | `Number`     |           | Sets the chart's height (breaks responsiveness).                                                                                                |
| margin                  | `{ Number }` |           | Sets the margin sizes around the chart from an object with `top`, `right`, `bottom`, and `left` key-values `[1]`.                               |
| onClick                 | `Function`   |           | Callback function to call during the onClick event.                                                                                             |
| onMouseEnter            | `Function`   |           | Callback function to call during the onMouseEnter event.                                                                                        |
| onMouseLeave            | `Function`   |           | Callback function to call during the OnMouseLeave event.                                                                                        |
| responsive              | `Boolean`    | `false`   | Activates the chart responsiveness feature.                                                                                                     |
| tooltip                 | `Boolean`    | `false`   | Activates the built in tooltip.                                                                                                                 |
| width                   | `Number`     | `640`     | Sets the chart's width.                                                                                                                         |
| xAxisChartLabel         | `String`     |           | Sets the Chart's X axis label (you might need to adjust the margin).                                                                            |
| xAxisLabelRotation      | `Boolean`    | `false`   | Rotates the X axis labels when these are to long to fit horizontally.                                                                           |
| xAxisLabelRotationValue | `Number`     | `-50`     | Overrides the default X axis label rotation value.                                                                                              |
| xAxisTicks              | `Number`     | `5`       | Sets the number of ticks of the x axis on the chart. `[2]`                                                                                      |
| padding                 | `Number`     | `0.1`     | Sets the padding between the chart bars.                                                                                                        |
| yAxisChartLabel         | `String`     |           | Sets the Chart's Y axis label (you might need to adjust the margin).                                                                            |
| yAxisTicks              | `Number`     | `5`       | Sets the number of ticks of the y axis on the chart. `[2]`                                                                                      |

`[1]` The default value for the margin prop is `{ top: 40, right: 50, bottom: 50, left: 50 }`

`[2]` The specified count is only a hint; the scale may return more or fewer values depending on the domain. [Read more...](https://github.com/d3/d3-scale/blob/master/README.md#continuous_ticks)
