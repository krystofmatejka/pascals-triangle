import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'

const sum = (numbers: number[]) => numbers.reduce((p, c) => p + c, 0)

export const TrianglePower2 = (): JSX.Element[] => {
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
  return <StyledPower2>{sum(triangleRow)}&nbsp;=&nbsp;2^{rowIndex}</StyledPower2>
}
