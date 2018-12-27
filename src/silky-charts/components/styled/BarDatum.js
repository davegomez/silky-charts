import React, { Fragment } from 'react'
import styled from 'styled-components'
import { bar, white } from '../../utils/themes'

const Rect = styled.rect.attrs(({ position: { x, y } }) => ({
  x,
  y,
  className: 'bar',
}))`
  fill: ${({ theme }) => bar[theme].bg};
  height: ${({ size }) => size.height}px;
  width: ${({ size }) => size.width}px;

  &:hover {
    fill: ${({ theme }) => bar[theme].fg};
  }
`

const Text = styled.text.attrs(({ position: { x, y }, width }) => ({
  className: 'value',
  textAnchor: 'middle',
  transform: `translate(${x + width / 2}, ${y + 30})`,
}))`
  fill: ${white};
`

const BarDatum = ({
  datum: { name, value },
  position,
  valuesOnBar,
  x,
  y,
  width,
  height,
  theme,
}) => (
  <Fragment>
    <Rect position={{ x, y }} size={{ width, height }} theme={theme} />
    {valuesOnBar && (
      <Text position={{ x, y }} width={width}>
        {value}
      </Text>
    )}
  </Fragment>
)

export default BarDatum
