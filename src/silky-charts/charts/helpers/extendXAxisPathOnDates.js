// @flow
export default (chart: any, width: number): void =>
  chart.select('.x-axis path.domain').attr('d', () => `M0,0.5V0.5H${width}`)
