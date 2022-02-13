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
    if (transformation === Transformation.SierpinskiTriangle) {
      document.documentElement.style.setProperty('--number-width', '30px')
    } else {
      const numberOfDigits = numberOfDigitsOfBiggestNumber(triangle)
      const width = numberOfDigits * 10

      document.documentElement.style.setProperty('--number-width', `${width}px`)
    }
  }, [triangle, transformation])
}
