import {FC} from 'react'
import styled from 'styled-components'
import create from 'zustand'
import {usePascalsTriangleStore} from '@/src/store'
import {calculateFibonacciNumberByIndexes, findIndexesForFibonacci} from '@/src/lib'
import {CssColors} from '@/src/constants'
import {HighlightedNumber} from './styles'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

const useFibStore = create<{fib: number, setFib: (n: number) => void}>((set) => ({
  fib: 0,
  setFib: (n: number) => set({fib: n}),
}))

const Fibonacci: FC = () => {
  const fib = useFibStore((state) => state.fib)

  if (!fib) {
    return  null
  }

  return (
    <StyledFibonacci>{fib}</StyledFibonacci>
  )
}

export const TriangleFibonacciSequence: FC = () => {
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  const setFib = useFibStore((state) => state.setFib)

  return (
    <>
      <PascalsTriangleSkeleton
        rowOnMouseEnter={(row, rowIndex, triangle) => {
          const fib = findIndexesForFibonacci(rowIndex)
          setFib(calculateFibonacciNumberByIndexes(fib, triangle))
          const highlights = []
          fib.forEach((f, i) => {
            if (typeof f === 'number') {
              highlights.push([i, [f], CssColors.Highlight1])
            }
          })
          highlights.push([rowIndex, new Array(row.length).fill(0).map((_, i) => i), CssColors.Highlight2])
          setHighlights(highlights)
        }}
      />
      <Fibonacci/>
    </>
  )
}

const StyledFibonacci = styled(HighlightedNumber)`
  top: 0;
`
