export default (svg, { height }: size, { top }: margin, text) =>
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2))
    .attr('y', top / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text(text)
