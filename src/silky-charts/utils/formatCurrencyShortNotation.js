import cond from 'ramda/src/cond'
import identity from 'ramda/src/identity'
import T from 'ramda/src/T'

const isM = x => (x >= 1000 && x <= 999999) || (x <= -1000 && x >= -999999)
const isMM = x =>
  (x >= 1000000 && x <= 999999999) || (x <= -1000000 && x >= -999999999)

export default cond([
  [isM, x => `${(x / 1000).toFixed(1)}M`],
  [isMM, x => `${(x / 1000000).toFixed(1)}MM`],
  [T, identity],
])
