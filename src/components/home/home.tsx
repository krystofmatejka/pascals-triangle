import {FC, useState} from 'react'
import styled from 'styled-components'
import {FloorSelector} from '../floor-selector'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Transformation} from '@/src/components/constants'
import {Menu} from '@/src/components/menu'
import {pascalsTriangle} from '@/src/components/lib'
import {useRecalculateNumberWidth} from '@/src/components/hooks'
import {findIndexesForFibonacci, calculateFibonacciNumberByIndexes} from '@/src/components/lib/fibonacci'

export const Home: FC = () => {
  const {numberOfFloors, transformation} = usePascalsTriangleStore()
  const [highlightedIndexes, setHighlightedIndexes] = useState([])
  const triangle = pascalsTriangle(numberOfFloors)

  useRecalculateNumberWidth({triangle, transformation})

  console.log({highlightedIndexes})
  return (
    <>
      <Menu/>
      <FloorSelector/>
      <Container>
        {triangle.map((row, rowIndex) => (
          <Row key={rowIndex} onMouseEnter={() => {
            if (transformation === Transformation.FibonacciSequence) {
              setHighlightedIndexes(findIndexesForFibonacci(rowIndex))
            }
          }}>
            {row.map((number, index) => {
              if (transformation === Transformation.Sierpinski_Triangle) {
                return <Number key={index} highlight={(number % 2) ? null: '#c5eeb9'}>{number % 2}</Number>
              } if (transformation === Transformation.FibonacciSequence) {
                const isHighlighted = (highlightedIndexes[rowIndex] === index)
                return <Number key={index} highlight={isHighlighted ? 'red': undefined}>{number}</Number>
              } else {
                return <Number key={index}>{number}</Number>
              }
            })}
            {(transformation === Transformation.Power_2) && <Power2 triangleRow={row} rowIndex={rowIndex}/>}
          </Row>
        ))}
        {(transformation === Transformation.FibonacciSequence) && <Fibonacci>{calculateFibonacciNumberByIndexes(highlightedIndexes, triangle)}</Fibonacci>}
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
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

const Fibonacci = styled(Number)`
  position: absolute;
  right: 20px;
  top: 0;
  background: #bed7ee;
  padding: 5px 10px;
`
