import {FC} from 'react'
import styled from 'styled-components'
import create from 'zustand'
import {flow} from 'fp-ts/function'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {HighlightedNumber} from './styles'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'
import {Highlights, NumberOrNull, Triangle} from '@/src/types'

const useFibStore = create<{fib: number, setFib: (n: number) => void}>((set) => ({
  fib: 0,
  setFib: (n: number) => set({fib: n}),
}))

export const highlightAndSum = (rowIndex: number, rowLength: number, triangle: Triangle) => {
  const highlights = []
  const indexes: NumberOrNull = new Array(rowIndex + 1).fill(null)
  indexes[rowIndex] = 0

  let fibonacci = 1
  let lastIndex = 0
  let currentIndex = 0
  let index = rowIndex - 1

  while (currentIndex < index) {
    lastIndex = indexes[index + 1] ?? -1
    currentIndex = lastIndex + 1
    indexes[index] = currentIndex
    highlights.push([index, [currentIndex], CssColors.Highlight1])
    fibonacci += triangle[index][currentIndex]
    index--
  }

  highlights.reverse()

  highlights.push([rowIndex, [0], CssColors.Highlight1])

  return {
    fibonacci,
    highlights,
  }
}

/*const findIndexesForFibonacci = (rowIndex: number): NumberOrNull => {
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
}*/

/*const reduceRightFibonacci = <T,>(indexes: NumberOrNull, onNumber: (acc: T, index: number, number: number) => T, acc: T) => {
  let lastIndex = indexes[indexes.length - 1]
  let index = indexes.length - 1

  while (typeof lastIndex === 'number') {
    const result = onNumber(acc, index, lastIndex)
    if (typeof result !== undefined) {
      acc = result
    }

    index--
    lastIndex = indexes[index]
  }

  return acc
}

const highlightNumbers = (fib: NumberOrNull, index: number, length: number): Highlights => flow(
  highlightUpperRows,
  highlightLastRow(index, length),
)(fib)

const highlightUpperRows = (indexes: NumberOrNull): Highlights => reduceRightFibonacci<Highlights>(
  indexes,
  (highlights, index, number) => highlights.concat([[index, [number], CssColors.Highlight1]]),
  [],
)

const highlightLastRow = (index: number, length: number) => (highlights: Highlights) => {
  const highlightedRow = new Array(length).fill(0).map((_, i) => i)

  return highlights.concat([[index, highlightedRow, CssColors.Highlight2]])
}

export const calculateFibonacciNumberByIndexes = (indexes: NumberOrNull, triangle:Triangle): number => reduceRightFibonacci(
  indexes,
  (fibonacci, index, number) => fibonacci + triangle[index][number],
  0,
)*/

export const TriangleFibonacciSequence: FC = () => {
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)
  const setFib = useFibStore((state) => state.setFib)

  return (
    <>
      <PascalsTriangleSkeleton
        rowOnMouseEnter={(row, rowIndex, triangle) => {
          const {highlights, fibonacci} = highlightAndSum(rowIndex, row.length, triangle)

          setHighlights(highlights)
          setFib(fibonacci)
        }}
      />
      <Fibonacci/>
    </>
  )
}

const Fibonacci: FC = () => {
  const fib = useFibStore((state) => state.fib)

  if (!fib) {
    return  null
  }

  return (
    <StyledFibonacci>{fib}</StyledFibonacci>
  )
}

const StyledFibonacci = styled(HighlightedNumber)`
  top: 0;
`
