import {useCallback} from 'react'
import create from 'zustand'
import {CssColors, Transformation} from '@/src/constants'
import {pascalsTriangle} from '@/src/lib'
import type {Triangle} from '@/src/types'

const INITIAL_NUMBER_OF_FLOORS = 6

type PascalsTriangleStore = {
  triangle: Triangle
  numberOfFloors: number
  transformation: Transformation
  setNumberOfFloors: (v: number) => void
  setTransformation: (t: Transformation) => void
  highlights: CssColors[][]
  setHighlights: (rows: [number, number[], CssColors][]) => void
}

export const usePascalsTriangleStore = create<PascalsTriangleStore>((set) => ({
  triangle: pascalsTriangle(INITIAL_NUMBER_OF_FLOORS),
  numberOfFloors: INITIAL_NUMBER_OF_FLOORS,
  transformation: Transformation.None,
  setNumberOfFloors: (v: number) => set({numberOfFloors: v, triangle: pascalsTriangle(v)}),
  setTransformation: (t: Transformation) => set({transformation: t}),
  highlights: [[], [undefined, CssColors.Highlight1]],
  setHighlights: (rows: [number, number[], CssColors][]) => {
    const highlights = []
    rows.forEach(([rowIndex, numbers, color]) => {
      highlights[rowIndex] = []
      numbers.forEach((number) => highlights[rowIndex][number] = color)
    })

    set({highlights})
  },
}))


export const useIsHighlighted = (rowIndex: number, numberIndex: number) => {
  const pickHighlight = (state) => (state.highlights[rowIndex] && state.highlights[rowIndex][numberIndex])

  return usePascalsTriangleStore(useCallback(pickHighlight, [rowIndex, numberIndex]))
}
