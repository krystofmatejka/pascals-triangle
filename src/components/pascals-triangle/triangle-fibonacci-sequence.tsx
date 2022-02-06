import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {calculateFibonacciNumberByIndexes, findIndexesForFibonacci} from '@/src/components/lib'
import {CssColors} from '@/src/constants'
import {Row, Number} from './styles'
import type {NumberOrNull} from '@/src/types'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: NumberOrNull) => {
  if (highlightedIndex[rowIndex]=== numberIndex) {
    return CssColors.Highlight2
  }

  if (rowIndex === highlightedIndex.length - 1) {
    return CssColors.Highlight1
  }

  return undefined
}

export const TriangleFibonacciSequence: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<NumberOrNull>([])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex} onMouseEnter={() => setHighlightedIndex(findIndexesForFibonacci(rowIndex))}>
          {row.map((number, numberIndex) => (
            <Number key={numberIndex} highlight={pickHighlight(rowIndex, numberIndex, highlightedIndex)}>
              {number}
            </Number>
          ))}
        </Row>
      ))}
      <Fibonacci>{calculateFibonacciNumberByIndexes(highlightedIndex, triangle)}</Fibonacci>
    </>
  )
}

const Fibonacci = styled(Number)`
  position: absolute;
  right: 20px;
  top: 0;
  background: var(${CssColors.Highlight1});
  padding: 5px 10px;
`
