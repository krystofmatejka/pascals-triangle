import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'

const isOdd = (number: number) => !!(number % 2)

export const SierpinskiTriangle = () => {
  const {triangle} = usePascalsTriangleStore()

  return triangle.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((number, numberIndex) => (
        <Number key={numberIndex} highlight={isOdd(number) ? null: '--highlight-2'}>
          {number}
        </Number>
      ))}
    </Row>
  ))
}
