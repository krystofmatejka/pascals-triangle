import {FC, useState} from 'react'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {hockeyStick} from '@/src/components/lib/hockey-stick'
import {numOrNull} from '@/src/components/lib/types'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: numOrNull) => {
  if (highlightedIndex[rowIndex] === numberIndex) {
    return '--highlight-3' as const
  }

  return undefined
}

export const TriangleHockeyStick: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<numOrNull>([])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              highlight={pickHighlight(rowIndex, numberIndex, highlightedIndex)}
              onClick={(() => setHighlightedIndex(hockeyStick(triangle, [rowIndex, numberIndex])))}>{number}</Number>
          ))}
        </Row>
      ))}
    </>
  )
}
