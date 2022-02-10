import {FC} from 'react'
import {FloorSelector} from '../floor-selector'
import {usePascalsTriangleStore} from '@/src/store'
import {Menu} from '@/src/components/menu'
import {pascalsTriangle} from '@/src/lib'
import {useRecalculateNumberWidth} from '@/src/hooks'
import {PascalsTriangle} from '@/src/components/pascals-triangle'

export const Home: FC = () => {
  const numberOfFloors = usePascalsTriangleStore((state) => state.numberOfFloors)
  const transformation = usePascalsTriangleStore((state) => state.transformation)
  const triangle = usePascalsTriangleStore((state) => state.triangle)


  useRecalculateNumberWidth({triangle, transformation})

  return (
    <>
      <Menu/>
      <PascalsTriangle/>
    </>
  )
}
