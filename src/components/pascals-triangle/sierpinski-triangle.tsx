import {FC} from 'react'
import {CssColors} from '@/src/constants'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

const isOdd = (number: number) => (number % 2)

const pickHighlight = (number: number) => isOdd(number) ? null: CssColors.Highlight1

export const SierpinskiTriangle: FC = () => {
  return <PascalsTriangleSkeleton
    numberProps={(_, number) => ({
      highlight: pickHighlight(number),
    })}
    renderNumber={(number => isOdd(number))}
  />
}
