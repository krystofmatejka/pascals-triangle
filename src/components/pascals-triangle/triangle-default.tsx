import {FC, useState, useCallback} from 'react'
import {usePascalsTriangleStore, useIsHighlighted, useIsHighlighted2} from '@/src/store'
import {CssColors} from '@/src/constants'
import {Row, Number} from './styles'
import type {Index} from '@/src/types'

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
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlighted = usePascalsTriangleStore((state) => state.setHighlighted)
  const setHighlighted2 = usePascalsTriangleStore((state) => state.setHighlighted2)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number2
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
              onMouseEnter={() => {
                const h2 = []
                h2[rowIndex - 1] = [numberIndex - 1, numberIndex]
                setHighlighted2(h2)
                const h = []
                h[rowIndex] = [numberIndex]
                setHighlighted(h)
              }}
            >
              {number}
            </Number2>
          ))}
        </Row>
      ))}
    </>
  )
}

type NumberProps = {
  rowIndex: number
  numberIndex: number
  onMouseEnter?: () => void
}

const Number2: FC<NumberProps> = ({rowIndex, numberIndex, onMouseEnter, children}) => {
  const isHighlighted = useIsHighlighted(rowIndex, numberIndex)
  const isHighlighted2 = useIsHighlighted2(rowIndex, numberIndex)

  let h = undefined
  if (isHighlighted) {
    h = CssColors.Highlight1
  }
  if (isHighlighted2) {
    h = CssColors.Highlight2
  }

  return (
    <Number
      highlight={h}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </Number>
  )
}
