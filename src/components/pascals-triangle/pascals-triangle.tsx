import {FC} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/components/constants'
import {TriangleDefault} from './triangle-default'
import {TrianglePower2} from './triangle-power-2'
import {SierpinskiTriangle} from './sierpinski-triangle'
import {TriangleFibonacciSequence} from './triangle-fibonacci-sequence'
import {usePascalsTriangleStore} from '@/src/components/store'

const chooseTriangle = (transformation: Transformation) => {
  switch (transformation) {
  case Transformation.None:
    return <TriangleDefault/>
  case Transformation.Power_2:
    return <TrianglePower2/>
  case Transformation.Sierpinski_Triangle:
    return <SierpinskiTriangle/>
  case Transformation.FibonacciSequence:
    return <TriangleFibonacciSequence/>
  }
}

export const PascalsTriangle: FC = () => {
  const {transformation} = usePascalsTriangleStore()

  return (
    <Container>
      {chooseTriangle(transformation)}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`
