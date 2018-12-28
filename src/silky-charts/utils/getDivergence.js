export default (value, currentValue) => {
  const divergence = value - currentValue
  return divergence > 0 ? `+${divergence}` : divergence
}
