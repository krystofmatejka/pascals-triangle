import {useEffect} from 'react'
import {Transformation} from '@/src/constants'
import {numberOfDigitsOfBiggestNumber} from '@/src/lib'
import type {Triangle} from '@/src/types'

type UseRecalculateNumberWidthProps = {
  triangle: Triangle
  transformation: Transformation
}

export const useRecalculateNumberWidth = ({triangle, transformation}: UseRecalculateNumberWidthProps) => {
  useEffect(() => {
    const width = (transformation === Transformation.SierpinskiTriangle)
      ? 20
      : numberOfDigitsOfBiggestNumber(triangle) * 10

    document.documentElement.style.setProperty('--number-width', `${width}px`)
  }, [triangle, transformation])
}
