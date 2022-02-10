import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {Row, Number as StyledNumber} from './styles'
import {Number} from './number'

const sum = (numbers: number[]) => numbers.reduce((p, c) => p + c, 0)

export const TrianglePower2: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <Number key={numberIndex} rowIndex={rowIndex} numberIndex={numberIndex}>
              {number}
            </Number>
          ))}
          <Power2>{sum(row)}&nbsp;=&nbsp;2^{rowIndex}</Power2>
        </Row>
      ))}
    </>
  )
}

const Power2 = styled(StyledNumber)`
  position: absolute;
  right: 20px;
  background: var(${CssColors.Highlight1});
  width: auto;
  padding: 5px 10px;
`
