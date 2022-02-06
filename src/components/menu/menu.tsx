import {FC, useState} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/constants'
import {usePascalsTriangleStore} from '@/src/store'
import {FloorSelector} from '@/src/components/floor-selector'

const MenuItems = [
  {
    label: 'None',
    transformation: Transformation.None,
  },
  {
    label: 'Power 2',
    transformation: Transformation.Power2,
  },
  {
    label: 'The Sierpinski Triangle',
    transformation: Transformation.SierpinskiTriangle,
  },
  {
    label: 'Fibonacci Sequence',
    description: 'select row to calculate fibonacci sequence',
    transformation: Transformation.FibonacciSequence,
  },
  {
    label: 'Hockey stick pattern',
    transformation: Transformation.HockeyStick,
  },
]

export const Menu: FC = () => {
  const [visible, setVisible] = useState(true)
  const {transformation, setTransformation} = usePascalsTriangleStore()

  return (
    <Container>
      <FloorSelector/>
      <ToggleButton
        onClick={() => setVisible((previous) => !previous)}
      >
        {visible ? 'Hide Menu': 'Show Menu'}
      </ToggleButton>
      <MenuContainer visible={visible}>
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
  position: fixed;
  z-index: 1;
  padding-left: 20px;
  overflow: hidden;
`

const ToggleButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #a9a9a9;
  font-size: 1rem;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`

const MenuContainer = styled.ul<{visible: boolean}>`
  transform: ${p => p.visible ? 'translateX(0)' : 'translateX(calc(-100% - 20px))'};
  transition: transform ease 0.3s;
  background: #fff;

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
