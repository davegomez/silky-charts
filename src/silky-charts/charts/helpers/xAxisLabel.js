export default (svg, { width, height }: size, { bottom }: margin, text) =>
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', width / 2)
    .attr('y', height - bottom / 3)
    .attr('text-anchor', 'middle')
    .text(text)
