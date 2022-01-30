import {FC, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

enum Transformation {
  None,
  Power_2,
  Sierpinski_Triangle
}

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

const Number = styled.div<{highlight?: string}>`
  padding: 5px 0;
  margin: 5px;
  width: var(--number-width);
  text-align: center;
  transition: width ease 0.3s;

  border-radius: 5px;
  background: ${p => p.highlight ?? '#e0e0e0'};
  
  font-family: monospace;
  font-size: 1rem;
`

export const Home: FC = () => {
  const [floor, setFloor] = useState(6)
  const [transformation, setTransformation] = useState(Transformation.None)
  const containerRef = useRef<HTMLDivElement>()
  const triangle = pascalsTriangle(floor)

  useEffect(() => {
    if (transformation === Transformation.None || transformation === Transformation.Power_2) {
      const biggestNumber = getBiggestNumberFromTriangle(triangle)
      const leftPadding = numberOfDigits(biggestNumber)
      const width = 20 + leftPadding * 10

      document.documentElement.style.setProperty('--number-width', `${width}px`)
    }

    if (transformation === Transformation.Sierpinski_Triangle) {
      document.documentElement.style.setProperty('--number-width', '40px')
    }
  }, [triangle, transformation])

  return (
    <>
      <Menu selectTransformation={setTransformation}/>
      <ContainerInput>
        <input type='number' min='0' max='100' value={floor} onChange={(e) => setFloor(parseInt(e.target.value))}/>
      </ContainerInput>
      <Container ref={containerRef}>
        {triangle.map((row, index) => (
          <Row key={index}>
            {row.map((number, index) => {
              if (transformation === Transformation.None || transformation === Transformation.Power_2) {
                return <Number key={index}>{number}</Number>
              }
              if (transformation === Transformation.Sierpinski_Triangle) {
                return <Number key={index} highlight={(number % 2) ? null: '#c5eeb9'}>{number % 2}</Number>
              }
            })}
            {(transformation === Transformation.Power_2) && <Power2 triangleRow={row} rowIndex={index}/>}
          </Row>
        ))}
      </Container>
    </>
  )
}

const StyledPower2 = styled(Number)`
  position: absolute;
  right: 20px;
  background: #bed7ee;
  width: auto;
  padding: 5px 10px;
`

const Power2: FC<{triangleRow: number[], rowIndex: number}> = ({triangleRow, rowIndex}) => {
  const sumOfRow = triangleRow.reduce((p, c) => p + c, 0)
  return <StyledPower2>{sumOfRow}&nbsp;=&nbsp;2^{rowIndex}</StyledPower2>
}

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

const Menu: FC<{selectTransformation: (t: Transformation) => void}> = ({selectTransformation}) => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <button onClick={() => setVisible((previous) => !previous)}>{visible ? 'Hide Menu': 'Show Menu'}</button>
      <MenuContainer visible={visible}>
        <li onClick={() => selectTransformation(Transformation.None)}>None</li>
        <li onClick={() => selectTransformation(Transformation.Power_2)}>Power 2</li>
        <li>Prime numbers</li>
        <li onClick={() => selectTransformation(Transformation.Sierpinski_Triangle)}>The Sierpinski Triangle</li>
      </MenuContainer>
    </div>
  )
}
