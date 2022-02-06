import {FC, useState} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/components/constants'
import {usePascalsTriangleStore} from '@/src/components/store'

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
    <div>
      <button onClick={() => setVisible((previous) => !previous)}>{visible ? 'Hide Menu': 'Show Menu'}</button>
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
    </div>
  )
}

const MenuContainer = styled.ul<{visible: boolean}>`
  position: absolute;
  z-index: 1;
  transform: ${p => p.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ease 0.3s;
  background: #fff;
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
