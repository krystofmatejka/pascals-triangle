import {FC, useState} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/components/store'
import {Row, Number} from './styles'
import {hockeyStick} from '@/src/components/lib/hockey-stick'
import {numOrNull} from '@/src/components/lib/types'
import {CssColors} from '@/src/components/constants'

const pickHighlight = (rowIndex: number, numberIndex: number, highlightedIndex: numOrNull) => {
  if (highlightedIndex[rowIndex] === numberIndex) {
    return CssColors.Highlight1
  }

  return undefined
}

export const TriangleHockeyStick: FC = () => {
  const {triangle} = usePascalsTriangleStore()
  const [highlightedIndex, setHighlightedIndex] = useState<numOrNull>([])

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
