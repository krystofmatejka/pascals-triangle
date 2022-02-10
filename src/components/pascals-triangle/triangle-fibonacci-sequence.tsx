import {FC} from 'react'
import styled from 'styled-components'
import create from 'zustand'
import {usePascalsTriangleStore} from '@/src/store'
import {calculateFibonacciNumberByIndexes, findIndexesForFibonacci} from '@/src/lib'
import {CssColors} from '@/src/constants'
import {Row, Number as StyledNumber} from './styles'
import {Number} from './number'

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
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  const setFib = useFibStore((state) => state.setFib)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex} onMouseEnter={() => {
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
        }}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
            >
              {number}
            </Number>
          ))}
        </Row>
      ))}
      <Fibonacci/>
    </>
  )
}

const StyledFibonacci = styled(StyledNumber)`
  position: absolute;
  right: 20px;
  top: 0;
  background: var(${CssColors.Highlight1});
  padding: 5px 10px;
`
