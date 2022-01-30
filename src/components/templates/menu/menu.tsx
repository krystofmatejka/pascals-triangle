import {FC, useState} from 'react'
import styled from 'styled-components'
import {Transformation} from '@/src/components/templates/constants'
import {usePascalsTriangleStore} from '@/src/components/templates/store'

const MenuContainer = styled.ul<{visible: boolean}>`
  position: absolute;
  transform: ${p => p.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ease 0.3s;
  background: #fff;

  & > li {
    cursor: pointer;
  }

  & > li:hover {
    text-decoration: underline;
  }
`

export const Menu: FC = () => {
  const [visible, setVisible] = useState(true)
  const {setTransformation} = usePascalsTriangleStore()

  return (
    <div>
      <button onClick={() => setVisible((previous) => !previous)}>{visible ? 'Hide Menu': 'Show Menu'}</button>
      <MenuContainer visible={visible}>
        <li onClick={() => setTransformation(Transformation.None)}>None</li>
        <li onClick={() => setTransformation(Transformation.Power_2)}>Power 2</li>
        <li>Prime numbers</li>
        <li onClick={() => setTransformation(Transformation.Sierpinski_Triangle)}>The Sierpinski Triangle</li>
      </MenuContainer>
    </div>
  )
}
