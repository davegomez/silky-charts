import cond from 'ramda/src/cond'
import identity from 'ramda/src/identity'
import T from 'ramda/src/T'

const isHecto = x => (x >= 100 && x <= 999) || (x <= -100 && x >= -999)
const isKilo = x => (x >= 1000 && x <= 999999) || (x <= -1000 && x >= -999999)
const isMega = x =>
  (x >= 1000000 && x <= 999999999) || (x <= -1000000 && x >= -999999999)
const isGiga = x =>
  (x >= 1000000000 && x <= 999999999999) ||
  (x <= -1000000000 && x >= -999999999999)

export default cond([
  [isHecto, x => `${(x / 100).toFixed(1)}h`],
  [isKilo, x => `${(x / 1000).toFixed(1)}k`],
  [isMega, x => `${(x / 1000000).toFixed(1)}M`],
  [isGiga, x => `${(x / 1000000000).toFixed(1)}G`],
  [T, identity],
])
