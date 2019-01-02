import { stack as d3Stack, stackOrderNone, stackOffsetNone } from 'd3-shape';

export default keys =>
  d3Stack()
    .keys(keys)
    .order(stackOrderNone)
    .offset(stackOffsetNone);
