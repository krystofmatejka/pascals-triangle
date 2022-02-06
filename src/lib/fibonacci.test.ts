import {findIndexesForFibonacci, calculateFibonacciNumberByIndexes} from './fibonacci'

describe(findIndexesForFibonacci.name, () => {
  test('0', () => expect(findIndexesForFibonacci(0)).toEqual([0]))
  test('1', () => expect(findIndexesForFibonacci(1)).toEqual([null, 0]))
  test('2', () => expect(findIndexesForFibonacci(2)).toEqual([null, 1, 0]))
  test('5', () => expect(findIndexesForFibonacci(5)).toEqual([null, null, null, 2, 1, 0]))
})

const triangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
]

describe(calculateFibonacciNumberByIndexes.name, () => {
  test('0', () => expect(calculateFibonacciNumberByIndexes([0], triangle)).toBe(1))
  test('1', () => expect(calculateFibonacciNumberByIndexes([null, 0], triangle)).toBe(1))
  test('2', () => expect(calculateFibonacciNumberByIndexes([null, 1, 0], triangle)).toBe(2))
  test('5', () => expect(calculateFibonacciNumberByIndexes([null, null, null, 2, 1, 0], triangle)).toBe(8))
})
