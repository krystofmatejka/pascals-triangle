import {useCallback} from 'react'
import create from 'zustand'
import {Transformation} from '@/src/constants'
import {pascalsTriangle} from '@/src/lib'
import type {Triangle} from '@/src/types'

const INITIAL_NUMBER_OF_FLOORS = 6

type PascalsTriangleStore = {
  triangle: Triangle
  numberOfFloors: number
  transformation: Transformation
  setNumberOfFloors: (v: number) => void
  setTransformation: (t: Transformation) => void
  highlighted: number[][]
  setHighlighted: (h: number[][]) => void
  highlighted2: number[][]
  setHighlighted2: (h: number[][]) => void
}

export const usePascalsTriangleStore = create<PascalsTriangleStore>((set) => ({
  triangle: pascalsTriangle(INITIAL_NUMBER_OF_FLOORS),
  numberOfFloors: INITIAL_NUMBER_OF_FLOORS,
  transformation: Transformation.None,
  setNumberOfFloors: (v: number) => set({numberOfFloors: v, triangle: pascalsTriangle(v)}),
  setTransformation: (t: Transformation) => set({transformation: t}),
  highlighted: [],
  setHighlighted: (h: number[][]) => set({highlighted: h}),
  highlighted2: [],
  setHighlighted2: (h: number[][]) => set({highlighted2: h}),
}))

export const useIsHighlighted = (rowIndex: number, numberIndex: number) => {
  //return usePascalsTriangleStore(useCallback((state) => numberIndex === state.highlighted[rowIndex], [rowIndex, numberIndex]))
  return usePascalsTriangleStore(useCallback((state) => {
    return (state.highlighted[rowIndex] && state.highlighted[rowIndex].includes(numberIndex))
  }, [rowIndex, numberIndex]))
}

export const useIsHighlighted2 = (rowIndex: number, numberIndex: number) => {
  return usePascalsTriangleStore(useCallback((state) => {
    return (state.highlighted2[rowIndex] && state.highlighted2[rowIndex].includes(numberIndex))
  }, [rowIndex, numberIndex]))
}
