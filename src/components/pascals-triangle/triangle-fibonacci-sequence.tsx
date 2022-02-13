import {FC} from 'react'
import styled from 'styled-components'
import create from 'zustand'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {HighlightedNumber} from './styles'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'
import {Highlights, Triangle} from '@/src/types'

const useFibonacciStore = create<{fibonacci: number, setFibonacci: (n: number) => void}>((set) => ({
  fibonacci: 0,
  setFibonacci: (n: number) => set({fibonacci: n}),
}))

export const highlightAndSum = (endRowIndex: number, triangle: Triangle): [Highlights, number] => {
  let fibonacci = 0
  const highlights: Highlights = []

  for (let rowIndex = endRowIndex - Math.floor(endRowIndex / 2); rowIndex <= endRowIndex; rowIndex++) {
    const numberIndex = endRowIndex - rowIndex

    fibonacci += triangle[rowIndex][numberIndex]
    highlights.push([rowIndex, [numberIndex], CssColors.Highlight1])
  }

  return [highlights, fibonacci]
}

export const TriangleFibonacciSequence: FC = () => {
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)
  const setFibonacci = useFibonacciStore((state) => state.setFibonacci)

  return (
    <>
      <PascalsTriangleSkeleton
        rowOnMouseEnter={(row, rowIndex, triangle) => {
          const [highlights, fibonacci] = highlightAndSum(rowIndex, triangle)

          setHighlights(highlights)
          setFibonacci(fibonacci)
        }}
      />
      <Fibonacci/>
    </>
  )
}

const Fibonacci: FC = () => {
  const fibonacci = useFibonacciStore((state) => state.fibonacci)

  return <StyledFibonacci>{fibonacci}</StyledFibonacci>
}

const StyledFibonacci = styled(HighlightedNumber)`
  top: 20px;
`
