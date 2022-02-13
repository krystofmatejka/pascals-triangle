import {FC} from 'react'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'
import {PascalsTriangleSkeleton} from './pascals-triangle-skeleton'
import {Highlights, Triangle} from '@/src/types'

export const highlightHockeyStick = (triangle: Triangle, selectedRow: number, selectedNumber: number): Highlights => {
  const highlights: Highlights = []
  const numberOfEmptyRows = selectedRow - 1 - selectedNumber

  if (numberOfEmptyRows >= 0) {
    for (let i = 0; i <= selectedNumber; i++) {
      highlights.push([numberOfEmptyRows + i, [i], CssColors.Highlight1])
    }
  }

  highlights.push([selectedRow, [selectedNumber], CssColors.Highlight2])

  return highlights
}

export const TriangleHockeyStick: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  return <PascalsTriangleSkeleton
    numberProps={([rowIndex, numberIndex]) => ({
      onClick: () => {
        const highlights = highlightHockeyStick(triangle, rowIndex, numberIndex)

        setHighlights(highlights)
      },
    })}
  />
}
