import {FC} from 'react'
import {FloorSelector} from '../floor-selector'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Menu} from '@/src/components/menu'
import {pascalsTriangle} from '@/src/components/lib'
import {useRecalculateNumberWidth} from '@/src/components/hooks'
import {PascalsTriangle} from '@/src/components/pascals-triangle'

export const Home: FC = () => {
  const {numberOfFloors, transformation} = usePascalsTriangleStore()
  const triangle = pascalsTriangle(numberOfFloors)

  useRecalculateNumberWidth({triangle, transformation})

  return (
    <>
      <Menu/>
      <FloorSelector/>
      <PascalsTriangle/>
    </>
  )
}
