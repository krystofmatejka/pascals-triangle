import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {CssColors} from '@/src/constants'

export const FloorSelector: FC = () => {
  const {
    numberOfFloors,
    setNumberOfFloors,
  } = usePascalsTriangleStore()

  return (
    <ContainerInput>
      <Label htmlFor='floor'>
        Number of floors:
      </Label>
      <StyledInput
        id='floor'
        type='number'
        min='0'
        max='100'
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
  width: 100%;
  margin-bottom: 5px;
  font-size: 0.8rem;
`

const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  font-size: 1rem;
  width: 125px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &:focus {
    outline:solid 2px var(${CssColors.Highlight3});
  }
`
