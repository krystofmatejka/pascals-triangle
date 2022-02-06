import {useEffect} from 'react'
import {Transformation} from '@/src/constants'
import {calculateWidth, Triangle} from '@/src/components/lib'

type UseRecalculateNumberWidthProps = {
  triangle: Triangle
  transformation: Transformation
}

export const useRecalculateNumberWidth = ({triangle, transformation}: UseRecalculateNumberWidthProps) => {
  useEffect(() => {
    if (transformation === Transformation.SierpinskiTriangle) {
      document.documentElement.style.setProperty('--number-width', '30px')
    } else {
      const width = calculateWidth(triangle, 10)

      document.documentElement.style.setProperty('--number-width', `${width}px`)
    }
  }, [triangle, transformation])
}
