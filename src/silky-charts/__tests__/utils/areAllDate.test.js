import { areAllDate } from '../../utils'

const withDate = [
  { foo: '2018-02-20T05:00:00.000Z', bar: 1 },
  { foo: '2018-03-20T05:00:00.000Z', bar: 2 },
  { foo: '2018-04-20T05:00:00.000Z', bar: 3 },
]

const withoutDate = [
  { foo: 'foo', bar: 1 },
  { foo: '2018-03-20T05:00:00.000Z', bar: 2 },
  { foo: '2018-04-20T05:00:00.000Z', bar: 3 },
]

test('should be true if all values in array are instance of Date', () => {
  const areFooDate = areAllDate(withDate.map(x => x.foo))
  expect(areFooDate).toBe(true)
})

test('should be false if any value in array is not instance of Date', () => {
  const areFooDate = areAllDate(withoutDate.map(x => x.foo))
  expect(areFooDate).toBe(false)
})
