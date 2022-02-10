import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {Row} from './styles'
import {Number} from './number'

export const TriangleDefault: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
              onMouseEnter={() => setHighlights([
                [rowIndex - 1, [numberIndex - 1, numberIndex], CssColors.Highlight1],
                [rowIndex, [numberIndex], CssColors.Highlight2],
              ])}
            >
              {number}
            </Number>
          ))}
        </Row>
      ))}
    </>
  )
}
