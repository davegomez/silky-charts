import color from 'color';

export default x =>
  color(x)
    .darken(0.2)
    .hsl()
    .string();
