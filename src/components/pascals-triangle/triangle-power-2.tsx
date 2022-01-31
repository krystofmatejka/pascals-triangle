import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'

export const TrianglePower2 = () => {
  const {triangle} = usePascalsTriangleStore()

  return triangle.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((number, numberIndex) => (
        <Number key={numberIndex}>
          {number}
        </Number>
      ))}
      <Power2 triangleRow={row} rowIndex={rowIndex}/>
    </Row>
  ))
}

const StyledPower2 = styled(Number)`
  position: absolute;
  right: 20px;
  background: #bed7ee;
  width: auto;
  padding: 5px 10px;
`

const Power2: FC<{triangleRow: number[], rowIndex: number}> = ({triangleRow, rowIndex}) => {
  const sumOfRow = triangleRow.reduce((p, c) => p + c, 0)
  return <StyledPower2>{sumOfRow}&nbsp;=&nbsp;2^{rowIndex}</StyledPower2>
}
