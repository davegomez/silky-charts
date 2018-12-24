export default (
  svg,
  { width, height }: size,
  { bottom, right }: margin,
  text
) =>
  svg
    .append('text')
    .attr('class', 'source')
    .attr('x', width - right / 2)
    .attr('y', height - bottom / 3)
    .attr('text-anchor', 'end')
    .text(text)
