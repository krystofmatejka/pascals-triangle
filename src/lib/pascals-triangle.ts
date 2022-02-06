import type {Triangle} from '@/src/types'

export const pascalsTriangle = (n: number): Triangle => {
  const triangle: Triangle = [
    [1],
  ]

  for (let i = 1; i < n; i++) {
    const upperRow = triangle[i - 1]
    const currentRow = []
    triangle[i] = currentRow

    for (let j = 0; j <= i; j++) {
      const left = upperRow[j - 1] ?? 0
      const right = upperRow[j] ?? 0

      currentRow.push(left + right)
    }
  }

  return triangle
}

const lastElementOfArray = <T>(array: T[]) => array[array.length - 1]

const getBiggestNumberFromTriangle = (triangle: Triangle) => {
  const lastRow = lastElementOfArray(triangle)

  return lastRow[Math.floor(lastRow.length / 2)]
}

const numberOfDigits = (n: number) => Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1

export const calculateWidth = (triangle: Triangle, padding: number) => {
  const biggestNumber = getBiggestNumberFromTriangle(triangle)
  const totalNumberOfDigits = numberOfDigits(biggestNumber)

  return (totalNumberOfDigits + 2) * padding
}
