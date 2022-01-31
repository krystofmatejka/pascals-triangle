import {useState} from 'react'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'

export const TriangleDefault = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndexes, setHighlightedIndexes] = useState([])

  return triangle.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((number, numberIndex) => {
        const isHighlighted = (
          highlightedIndexes[0] === rowIndex + 1
              && (highlightedIndexes[1] === numberIndex +1 || highlightedIndexes[1] === numberIndex))

        return (
          <Number
            key={numberIndex}
            highlight={isHighlighted ? 'red': undefined}
            onMouseEnter={() => {
              setHighlightedIndexes(() => [rowIndex, numberIndex])
            }}
          >
            {number}
          </Number>
        )
      })}
    </Row>
  ))
}
