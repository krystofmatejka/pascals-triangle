import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'

export const SierpinskiTriangle = () => {
  const {triangle} = usePascalsTriangleStore()

  return triangle.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((number, numberIndex) => (
        <Number key={numberIndex} highlight={(number % 2) ? null: '#c5eeb9'}>
          {number}
        </Number>
      ))}
    </Row>
  ))
}
