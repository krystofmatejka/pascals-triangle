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
}

export const usePascalsTriangleStore = create<PascalsTriangleStore>((set) => ({
  triangle: pascalsTriangle(INITIAL_NUMBER_OF_FLOORS),
  numberOfFloors: INITIAL_NUMBER_OF_FLOORS,
  transformation: Transformation.None,
  setNumberOfFloors: (v: number) => set({numberOfFloors: v, triangle: pascalsTriangle(v)}),
  setTransformation: (t: Transformation) => set({transformation: t}),
}))
