import type {Triangle, NumberOrNull} from '@/src/types'

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

export const calculateFibonacciNumberByIndexes = (indexes: NumberOrNull, triangle:Triangle): number => {
  let fibonacci = 0
  let lastIndex = indexes[indexes.length - 1]
  let index = indexes.length - 1

  while (lastIndex !== null) {
    lastIndex = indexes[index]

    if (typeof lastIndex !== 'number') {
      return fibonacci
    }

    fibonacci += triangle[index][lastIndex]

    index--
  }
}
