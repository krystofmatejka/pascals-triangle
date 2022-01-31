import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Number = styled.div<{highlight?: string}>`
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
