import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {calculateFibonacciNumberByIndexes, findIndexesForFibonacci} from '@/src/components/lib/fibonacci'

export const TriangleFibonacciSequence: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndexes, setHighlightedIndexes] = useState([])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex} onMouseEnter={() => setHighlightedIndexes(findIndexesForFibonacci(rowIndex))}>
          {row.map((number, numberIndex) => {
            const isHighlighted = (highlightedIndexes[rowIndex] === numberIndex)

            return (
              <Number key={numberIndex} highlight={isHighlighted ? 'red': undefined}>
                {number}
              </Number>
            )})}
        </Row>
      ))}
      <Fibonacci>{calculateFibonacciNumberByIndexes(highlightedIndexes, triangle)}</Fibonacci>
    </>
  )
}

const Fibonacci = styled(Number)`
  position: absolute;
  right: 20px;
  top: 0;
  background: #bed7ee;
  padding: 5px 10px;
`
