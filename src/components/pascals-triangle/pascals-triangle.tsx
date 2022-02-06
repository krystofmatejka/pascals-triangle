import {FC} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/constants'
import {usePascalsTriangleStore} from '@/src/store'
import {TriangleDefault} from './triangle-default'
import {TrianglePower2} from './triangle-power-2'
import {SierpinskiTriangle} from './sierpinski-triangle'
import {TriangleFibonacciSequence} from './triangle-fibonacci-sequence'
import {TriangleHockeyStick} from './triangle-hockey-stick'

const pickTriangle = (transformation: Transformation) => {
  switch (transformation) {
  case Transformation.None:
    return <TriangleDefault/>
  case Transformation.Power2:
    return <TrianglePower2/>
  case Transformation.SierpinskiTriangle:
    return <SierpinskiTriangle/>
  case Transformation.FibonacciSequence:
    return <TriangleFibonacciSequence/>
  case Transformation.HockeyStick:
    return <TriangleHockeyStick/>
  }
}

export const PascalsTriangle: FC = () => {
  const {transformation} = usePascalsTriangleStore()

  return (
    <Container>
      {pickTriangle(transformation)}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`
