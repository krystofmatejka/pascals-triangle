import {FC, ReactNode} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {Row} from './styles'
import {Number, NumberProps} from './number'
import type {Index, Triangle} from '@/src/types'

type PascalsTriangleSkeletonProps = {
  rowOnMouseEnter?: (row: number[], rowIndex: number, triangle: Triangle) => void,
  numberProps?: (index: Index, number: number) => NumberProps
  renderNumber?: (number: number) => ReactNode,
  renderAfterRow?: (row: number[], rowIndex: number) => ReactNode
}

export const PascalsTriangleSkeleton: FC<PascalsTriangleSkeletonProps> = ({
  rowOnMouseEnter,
  numberProps,
  renderNumber,
  renderAfterRow,
}) => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex} onMouseEnter={() => rowOnMouseEnter && rowOnMouseEnter(row, rowIndex, triangle)}>
          {row.map((number, numberIndex) => (
            <Number
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
              {...(numberProps && numberProps([rowIndex, numberIndex], number))}
            >
              {renderNumber ? renderNumber(number) : number}
            </Number>
          ))}
          {renderAfterRow && renderAfterRow(row, rowIndex)}
        </Row>
      ))}
    </>
  )
}
