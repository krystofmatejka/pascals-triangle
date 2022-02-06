import styled from 'styled-components'
import {CssColors} from '@/src/constants'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Number = styled.div<{highlight?: CssColors}>`
  padding: 5px 0;
  margin: 5px;
  width: var(--number-width);
  text-align: center;
  transition: width ease 0.3s;

  border-radius: 5px;
  background: var(${p => p.highlight ?? CssColors.Light});

  font-family: monospace;
  font-size: 1rem;

  cursor: default;
`
