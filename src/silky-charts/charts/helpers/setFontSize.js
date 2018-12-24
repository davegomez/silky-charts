export default (width, length, value) => {
  const valueString = `${value}`
  if (valueString.length === 2) {
    return `${width / length / 2.6}px`
  } else if (valueString.length >= 3) {
    return `${width / length / 3}px`
  }

  return ''
}
