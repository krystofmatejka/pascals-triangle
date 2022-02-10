import {FC} from 'react'
import {usePascalsTriangleStore, useIsHighlighted} from '@/src/store'
import {CssColors} from '@/src/constants'
import {Row, Number} from './styles'

export const TriangleDefault: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

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
                setHighlights([
                  [rowIndex - 1, [numberIndex - 1, numberIndex], CssColors.Highlight1],
                  [rowIndex, [numberIndex], CssColors.Highlight2],
                ])
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
  const highlight = useIsHighlighted(rowIndex, numberIndex)

  return (
    <Number
      highlight={highlight}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </Number>
  )
}
