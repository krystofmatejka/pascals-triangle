import {FC} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/constants'
import {usePascalsTriangleStore} from '@/src/store'
import {FloorSelector} from '@/src/components/floor-selector'

const MenuItems = [
  {
    label: 'Definition',
    description: "Pascal's triangle is a triangular array constructed by summing adjacent elements in preceding rows.",
    transformation: Transformation.None,
  },
  {
    label: 'Power 2',
    description: 'Number of row, starting from 0, can be used as a power of 2 and it is equal to sum of that row.',
    transformation: Transformation.Power2,
  },
  {
    label: 'The Sierpinski Triangle',
    description: 'When we highlight even numbers by 0 and odd by 1 the Sierpinski Triangle pattern emerges.',
    transformation: Transformation.SierpinskiTriangle,
  },
  {
    label: 'Fibonacci Sequence',
    description: 'From the start of each row diagonally upwards, a number from the Fibonacci Sequence can be found.',
    transformation: Transformation.FibonacciSequence,
  },
  {
    label: 'Hockey stick pattern',
    description: 'The sum of the elements in a diagonal line starting with 1 is equal to the next element down diagonally in the opposite direction.',
    transformation: Transformation.HockeyStick,
  },
]

export const Menu: FC = () => {
  const transformation = usePascalsTriangleStore((state) => state.transformation)
  const setTransformation = usePascalsTriangleStore((state) => state.setTransformation)

  return (
    <Container>
      <Heading>Pascal's Triangle</Heading>
      <FloorSelector/>
      <MenuContainer>
        {MenuItems.map((item) => {
          const isActive = transformation === item.transformation

          return (
            <Row
              key={item.label}
              active={isActive}
              onClick={() => setTransformation(item.transformation)}
            >
              <a>{item.label}</a>
              {isActive && item.description && <Description>{item.description}</Description>}
            </Row>
          )
        })}
      </MenuContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 20px;
  width: 300px;
`

const Heading = styled.h1`
  font-weight: normal;
`

const MenuContainer = styled.ul`
  padding: 0;
  margin: 20px 0;
  list-style: none;
`

const Row = styled.li<{active?: boolean}>`
  & > a {
    text-decoration: ${p => p.active ? 'underline' : 'none'};
  }

  &:hover > a {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Description = styled.p`
  text-decoration: none;
  padding: 0;
  margin: 5px 0;
  font-size: 0.8rem;
`
