import create from 'zustand'
import {Transformation} from '@/src/components/templates/constants'

type PascalsTriangleStore = {
  numberOfFloors: number
  transformation: Transformation
  setNumberOfFloors: (v: number) => void
  setTransformation: (t: Transformation) => void
}

export const usePascalsTriangleStore = create<PascalsTriangleStore>((set) => {
  return {
    numberOfFloors: 6,
    transformation: Transformation.None,
    setNumberOfFloors: (v: number) => set({numberOfFloors: v}),
    setTransformation: (t: Transformation) => set({transformation: t}),
  }
})
