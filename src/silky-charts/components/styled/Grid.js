import styled from 'styled-components'
import { themes } from '../../utils'

const Grid = styled.g.attrs(() => ({
  className: 'grid',
}))`
  path {
    stroke: transparent;
  }

  line {
    stroke: ${themes.grid};
  }
`

export default Grid
