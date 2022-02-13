import {FC} from 'react'
import styled from 'styled-components'
import {CssColors} from '@/src/constants'
import {Number as StyledNumber} from './styles'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

const sum = (numbers: number[]) => numbers.reduce((p, c) => p + c, 0)

export const TrianglePower2: FC = () => {
  return <PascalsTriangleSkeleton
    renderAfterRow={(row, rowIndex) => <Power2>{sum(row)}&nbsp;=&nbsp;2^{rowIndex}</Power2>}
  />
}

const Power2 = styled(StyledNumber)`
  position: absolute;
  right: 20px;
  background: var(${CssColors.Highlight1});
  width: auto;
  padding: 5px 10px;
`
