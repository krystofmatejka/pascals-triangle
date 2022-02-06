import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {Row, Number} from './styles'
import {CssColors} from '@/src/constants'

const isOdd = (number: number) => (number % 2)

const pickHighlight = (number: number) => isOdd(number) ? null: CssColors.Highlight1

export const SierpinskiTriangle: FC = () => {
  const {triangle} = usePascalsTriangleStore()

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number key={numberIndex} highlight={pickHighlight(number)}>
              {isOdd(number)}
            </Number>
          ))}
        </Row>
      ))}
    </>
  )
}
