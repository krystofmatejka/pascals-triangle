import create from 'zustand'
import {Transformation} from '@/src/components/constants'
import {Triangle} from '@/src/components/lib'
import {pascalsTriangle} from '@/src/components/lib'

type PascalsTriangleStore = {
  triangle: Triangle
  numberOfFloors: number
  transformation: Transformation
  setNumberOfFloors: (v: number) => void
  setTransformation: (t: Transformation) => void
}

export const usePascalsTriangleStore = create<PascalsTriangleStore>((set) => ({
  triangle: [[1]],
  numberOfFloors: 6,
  transformation: Transformation.None,
  setNumberOfFloors: (v: number) => set({numberOfFloors: v, triangle: pascalsTriangle(v)}),
  setTransformation: (t: Transformation) => set({transformation: t}),
}))
