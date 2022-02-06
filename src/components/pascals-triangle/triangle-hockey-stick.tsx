import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {Row, Number} from './styles'
import {hockeyStick} from '@/src/lib'
import {CssColors} from '@/src/constants'
import type {NumberOrNull, Index} from '@/src/types'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: NumberOrNull, clickedIndex: Index) => {
  if (highlightedIndex.length && clickedIndex[0] === rowIndex && clickedIndex[1] === numberIndex) {
    return CssColors.Highlight2
  }

  if (highlightedIndex[rowIndex] === numberIndex) {
    return CssColors.Highlight1
  }

  return undefined
}


export const TriangleHockeyStick: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<NumberOrNull>([])
  const [clickedIndex, setClickedIndex] = useState<Index>([-1, -1])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <StyledNumber
              key={numberIndex}
              highlight={pickHighlight(rowIndex, numberIndex, highlightedIndex, clickedIndex)}
              onClick={(() => {
                setClickedIndex([rowIndex, numberIndex])
                setHighlightedIndex(hockeyStick(triangle, [rowIndex, numberIndex]))
              })}
            >
              {number}
            </StyledNumber>
          ))}
        </Row>
      ))}
    </>
  )
}

const StyledNumber = styled(Number)`
  cursor: pointer;
  transition: background-color ease 0.3s;
  
  &:hover {
    background: var(${CssColors.LightHighlighted});
  }
`
