import {numberOfDigitsOfBiggestNumber} from './pascals-triangle'

const smallTriangle = [
  [1],
  [1,1],
  [1,2,1],
]

const mediumTriangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
]

const bigTriangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
  [1,6,15,20,15,6,1],
]

describe.only(numberOfDigitsOfBiggestNumber.name, () => {
  test('small', () => expect(numberOfDigitsOfBiggestNumber(smallTriangle)).toBe(1))
  test('medium', () => expect(numberOfDigitsOfBiggestNumber(mediumTriangle)).toBe(2))
  test('big', () => expect(numberOfDigitsOfBiggestNumber(bigTriangle)).toBe(2))
})
