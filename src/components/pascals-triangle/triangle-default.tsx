import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

export const TriangleDefault: FC = () => {
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  return <PascalsTriangleSkeleton
    numberProps={([rowIndex, numberIndex]) => ({
      onMouseEnter: () => setHighlights([
        [rowIndex - 1, [numberIndex - 1, numberIndex], CssColors.Highlight1],
        [rowIndex, [numberIndex], CssColors.Highlight2],
      ]),
    })}
  />
}
