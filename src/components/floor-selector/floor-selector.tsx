import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'

export const FloorSelector: FC = () => {
  const {
    numberOfFloors,
    setNumberOfFloors,
  } = usePascalsTriangleStore()

  return (
    <ContainerInput>
      <input
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
  display: flex;
  justify-content: center;
  margin: 20px 0;
`
