import {FC, useState} from 'react'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {CssColors} from '@/src/components/constants'

type Index = [number, number]

const pickHighlight = (currentIndex: Index, highlightedIndex: Index) => {
  if (
    highlightedIndex[0] === currentIndex[0] + 1
    && (highlightedIndex[1] === currentIndex[1] +1 || highlightedIndex[1] === currentIndex[1])) {
    return CssColors.Highlight1
  }

  if (
    currentIndex[0] === highlightedIndex[0]
    && currentIndex[1] === highlightedIndex[1]
  ) {
    return CssColors.Highlight2
  }

  return undefined
}

export const TriangleDefault: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<Index>([-1, -1])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              highlight={pickHighlight([rowIndex, numberIndex], highlightedIndex)}
              onMouseEnter={() => setHighlightedIndex(() => [rowIndex, numberIndex])}
            >
              {number}
            </Number>
          ))}
        </Row>
      ))}
    </>
  )
}
