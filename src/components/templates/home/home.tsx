import {FC, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

export const pascalsTriangle = (n) => {
  const triangle = [
    [1],
  ]

  for (let i = 1; i < n; i++) {
    const upperRow = triangle[i - 1]
    const currentRow = []
    triangle[i] = currentRow

    for (let j = 0; j <= i; j++) {
      const left = upperRow[j - 1] ?? 0
      const right = upperRow[j] ?? 0

      currentRow.push(left + right)
    }
  }

  return triangle
}

const lastElementOfArray = (array) => array[array.length - 1]

const getBiggestNumberFromTriangle = (triangle) => {
  const lastRow = lastElementOfArray(triangle)
  return lastRow[Math.floor(lastRow.length / 2)]
}

const numberOfDigits = (n) => Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1

const Container = styled.div``

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Number = styled.div`
  padding: 5px 0;
  margin: 5px;
  width: var(--number-width);
  text-align: center;

  border-radius: 5px;
  background: #e0e0e0;
  
  font-family: monospace;
  font-size: 1rem;
`

export const Home: FC = () => {
  const [floor, setFloor] = useState(6)
  const containerRef = useRef<HTMLDivElement>()
  const triangle = pascalsTriangle(floor)

  useEffect(() => {
    const biggestNumber = getBiggestNumberFromTriangle(triangle)
    const leftPadding = numberOfDigits(biggestNumber)
    const width = 20 + leftPadding * 10

    document.documentElement.style.setProperty('--number-width', `${width}px`)
  }, [triangle])

  return (
    <>
      <ContainerInput>
        <input type='number' min='0' max='100' value={floor} onChange={(e) => setFloor(parseInt(e.target.value))}/>
      </ContainerInput>
      <Container ref={containerRef}>
        {triangle.map((row, index) => (
          <Row key={index}>
            {row.map((number, index) => (
              <Number key={index}>{number}</Number>
            ))}
          </Row>
        ))}
      </Container>
    </>
  )
}
