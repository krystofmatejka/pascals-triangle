import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {Menu} from '@/src/components/menu'
import {useRecalculateNumberWidth} from '@/src/hooks'
import {PascalsTriangle} from '@/src/components/pascals-triangle'

const Container = styled.div`
  display: flex;
`

export const Home: FC = () => {
  const transformation = usePascalsTriangleStore((state) => state.transformation)
  const triangle = usePascalsTriangleStore((state) => state.triangle)

  useRecalculateNumberWidth({triangle, transformation})

  return (
    <>
      <Container>
        <Menu/>
        <PascalsTriangle/>
      </Container>
    </>
  )
}
