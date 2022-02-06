import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {Row, Number} from './styles'
import {hockeyStick} from '@/src/components/lib/hockey-stick'
import {CssColors} from '@/src/constants'
import type {NumberOrNull} from '@/src/types'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: NumberOrNull) => {
  if (highlightedIndex[rowIndex] === numberIndex) {
    return CssColors.Highlight1
  }

  return undefined
}

export const TriangleHockeyStick: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<NumberOrNull>([])

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <StyledNumber
              key={numberIndex}
              highlight={pickHighlight(rowIndex, numberIndex, highlightedIndex)}
              onClick={(() => setHighlightedIndex(hockeyStick(triangle, [rowIndex, numberIndex])))}
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
