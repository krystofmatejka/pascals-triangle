import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {CssColors} from '@/src/constants'

const isOdd = (number: number) => (number % 2)

export const SierpinskiTriangle: FC = () => {
  const {triangle} = usePascalsTriangleStore()

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number key={numberIndex} highlight={isOdd(number) ? null: CssColors.Highlight1}>
              {isOdd(number)}
            </Number>
          ))}
        </Row>
      ))}
    </>
  )
}
