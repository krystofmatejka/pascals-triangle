import styled from 'styled-components'
import {CssColors} from '@/src/constants'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

type NumberProps = {
  highlight?: CssColors
  clickable?: boolean
  backgroundColor?: CssColors
  backgroundHoverColor?: CssColors
  cursor?: string
}

export const Number = styled.div.attrs<NumberProps>((attrs) => ({
  backgroundColor: attrs.highlight ?? CssColors.Light,
  backgroundHoverColor: attrs.clickable ? `var(${CssColors.LightHighlighted})` : 'default',
  cursor: attrs.clickable ? 'pointer' : 'default',
}))<NumberProps>`
  padding: 15px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  margin: 0 2px -10px 2px;
  width: var(--number-width);
  text-align: center;
  transition: width ease 0.3s, background-color ease 0.3s;
  background: var(${p => p.backgroundColor});
  font-family: monospace;
  font-size: 1.2rem;
  cursor: ${(p) => p.cursor};

  &:hover {
    background: ${(p => p.backgroundHoverColor)};
  }
`

export const HighlightedNumber = styled(Number)`
  position: absolute;
  right: 20px;
  background: var(${CssColors.Highlight1});
  width: auto;
  padding: 5px 10px;
  clip-path: none;
  border-radius: 5px;
`
