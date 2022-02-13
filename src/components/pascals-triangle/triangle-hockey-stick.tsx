import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {hockeyStick} from '@/src/lib'
import {CssColors} from '@/src/constants'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'

export const TriangleHockeyStick: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  return <PascalsTriangleSkeleton
    numberProps={([rowIndex, numberIndex]) => ({
      onClick: () => {
        const hs = hockeyStick(triangle, [rowIndex, numberIndex])
        const highlights = []
        hs.forEach((f, i) => {
          if (typeof f === 'number') {
            highlights.push([i, [f], CssColors.Highlight2])
          }
        })
        highlights.push([rowIndex, [numberIndex], CssColors.Highlight1])
        setHighlights(highlights)
      },
    })}
  />
}
