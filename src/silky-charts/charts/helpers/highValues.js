import { max } from 'd3-array'

export default x => {
  const maxValue = max(x.map(({ value }) => value))
  return maxValue > 99 || maxValue < -99
}
