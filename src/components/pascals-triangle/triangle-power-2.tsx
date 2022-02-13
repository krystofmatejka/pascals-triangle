import {FC} from 'react'
import {HighlightedNumber} from './styles'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

const sum = (numbers: number[]) => numbers.reduce((p, c) => p + c, 0)

export const TrianglePower2: FC = () => {
  return <PascalsTriangleSkeleton
    renderAfterRow={(row, rowIndex) => <HighlightedNumber>{sum(row)}&nbsp;=&nbsp;2^{rowIndex}</HighlightedNumber>}
  />
}
