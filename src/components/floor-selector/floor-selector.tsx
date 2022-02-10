import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'

export const FloorSelector: FC = () => {
  const numberOfFloors = usePascalsTriangleStore((state) => state.numberOfFloors)
  const setNumberOfFloors = usePascalsTriangleStore((state) => state.setNumberOfFloors)

  return (
    <ContainerInput>
      <Label htmlFor='floor'>
        Size: {numberOfFloors}
      </Label>
      <StyledInput
        id='floor'
        type='range'
        min='1'
        max='30'
        step='1'
        value={numberOfFloors}
        onChange={(e) => setNumberOfFloors(parseInt(e.target.value))}
      />
    </ContainerInput>
  )
}

const ContainerInput = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.8rem;
`

const StyledInput = styled.input`
  padding: 0;
  margin: 0;
  width: 100%;
`
