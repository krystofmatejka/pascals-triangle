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
  padding: 5px 0;
  margin: 5px;
  width: var(--number-width);
  text-align: center;
  transition: width,background-color ease 0.3s;

  border-radius: 5px;
  background: var(${p => p.backgroundColor});

  font-family: monospace;
  font-size: 1rem;

  cursor: ${(p) => p.cursor};

  &:hover {
    background: ${(p => p.backgroundHoverColor)};
  }
`
