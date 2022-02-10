import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {Row} from './styles'
import {Number} from './number'

const isOdd = (number: number) => (number % 2)

const pickHighlight = (number: number) => isOdd(number) ? null: CssColors.Highlight1

export const SierpinskiTriangle: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
              highlight={pickHighlight(number)}
            >
              {isOdd(number)}
            </Number>
          ))}
        </Row>
      ))}
    </>
  )
}
