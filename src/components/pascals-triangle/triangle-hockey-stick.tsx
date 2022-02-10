import {FC} from 'react'
import styled from 'styled-components'
import {usePascalsTriangleStore} from '@/src/store'
import {hockeyStick} from '@/src/lib'
import {CssColors} from '@/src/constants'
import {Row} from './styles'
import {Number} from './number'

export const TriangleHockeyStick: FC = () => {
  const triangle = usePascalsTriangleStore((state) => state.triangle)
  const setHighlights = usePascalsTriangleStore((state) => state.setHighlights)

  return (
    <>
      {triangle.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((number, numberIndex) => (
            <StyledNumber
              key={numberIndex}
              rowIndex={rowIndex}
              numberIndex={numberIndex}
              onClick={(() => {
                const hs = hockeyStick(triangle, [rowIndex, numberIndex])
                const highlights = []
                hs.forEach((f, i) => {
                  if (typeof f === 'number') {
                    highlights.push([i, [f], CssColors.Highlight2])
                  }
                })
                highlights.push([rowIndex, [numberIndex], CssColors.Highlight1])
                setHighlights(highlights)
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

  &:hover {
    background: var(${CssColors.LightHighlighted});
  }
`
