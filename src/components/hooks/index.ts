import {useEffect} from 'react'
import {Transformation} from '@/src/components/constants'
import {calculateWidth, Triangle} from '@/src/components/lib'

type UseRecalculateNumberWidthProps = {
  triangle: Triangle
  transformation: Transformation
}

export const useRecalculateNumberWidth = ({triangle, transformation}: UseRecalculateNumberWidthProps) => {
  useEffect(() => {
    if (transformation === Transformation.None || transformation === Transformation.Power_2) {
      const width = calculateWidth(triangle)

      document.documentElement.style.setProperty('--number-width', `${width}px`)
    }

    if (transformation === Transformation.Sierpinski_Triangle) {
      document.documentElement.style.setProperty('--number-width', '40px')
    }
  }, [triangle, transformation])
}
