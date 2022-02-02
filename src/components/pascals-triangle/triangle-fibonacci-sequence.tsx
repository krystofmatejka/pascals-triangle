import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {calculateFibonacciNumberByIndexes, findIndexesForFibonacci} from '@/src/components/lib/fibonacci'
import {numOrNull} from '@/src/components/lib/types'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: numOrNull) => {
  if (highlightedIndex[rowIndex]=== numberIndex) {
    return '--highlight-3'
  }

  if (rowIndex === highlightedIndex.length - 1) {
    return '--highlight-2'
  }

  return undefined
}

export const TriangleFibonacciSequence: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<numOrNull>([])

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
  background: var(--highlight-3);
  padding: 5px 10px;
`
