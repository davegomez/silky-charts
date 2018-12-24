export default (svg, { width }: size, { top }: margin, text) =>
  svg
    .append('text')
    .attr('class', 'title')
    .attr('x', width / 2)
    .attr('y', top / 2)
    .attr('text-anchor', 'middle')
    .text(text)
