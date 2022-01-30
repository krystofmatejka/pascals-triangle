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
    transformation: Transformation.Power_2,
  },
  {
    label: 'The Sierpinski Triangle',
    transformation: Transformation.Sierpinski_Triangle,
  },
]

export const Menu: FC = () => {
  const [visible, setVisible] = useState(true)
  const {transformation, setTransformation} = usePascalsTriangleStore()

  return (
    <div>
      <button onClick={() => setVisible((previous) => !previous)}>{visible ? 'Hide Menu': 'Show Menu'}</button>
      <MenuContainer visible={visible}>
        {MenuItems.map((item) => (
          <Row
            key={item.label}
            active={transformation === item.transformation}
            onClick={() => setTransformation(item.transformation)}
          >
            {item.label}
          </Row>
        ))}
      </MenuContainer>
    </div>
  )
}

const MenuContainer = styled.ul<{visible: boolean}>`
  position: absolute;
  transform: ${p => p.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ease 0.3s;
  background: #fff;
`

const Row = styled.li<{active?: boolean}>`
  cursor: pointer;
  text-decoration: ${p => p.active ? 'underline' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`
