import type {Triangle, NumberOrNull} from '@/src/types'
import {CssColors} from '@/src/constants'

export const findIndexesForFibonacci = (rowIndex: number): NumberOrNull => {
  const indexes: NumberOrNull = new Array(rowIndex + 1).fill(null)
  indexes[rowIndex] = 0

  let lastIndex = 0
  let currentIndex = 0
  let index = rowIndex - 1

  while (currentIndex < index) {
    lastIndex = indexes[index + 1] ?? -1
    currentIndex = lastIndex + 1
    indexes[index] = currentIndex

    index--
  }

  return indexes
}

export const calculateFibonacciNumberByIndexes = (indexes: NumberOrNull, triangle:Triangle) => {
  return reduceRightFibonacci(indexes, (fibonacci, index, number) => fibonacci + triangle[index][number], 0)
}

export const reduceRightFibonacci = <T>(indexes: NumberOrNull, onNumber: (acc: T, index: number, number: number) => T, acc: T) => {
  let lastIndex = indexes[indexes.length - 1]
  let index = indexes.length - 1

  while (lastIndex !== null) {
    lastIndex = indexes[index]

    if (typeof lastIndex !== 'number') {
      return acc
    }

    const result = onNumber(acc, index, lastIndex)
    if (typeof result !== undefined) {
      acc = result
    }

    index--
  }
}
