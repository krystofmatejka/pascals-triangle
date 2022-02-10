import {FC} from 'react'
import {useIsHighlighted} from '@/src/store'
import {Number as StyledNumber} from './styles'
import {CssColors} from '@/src/constants'

type NumberProps = {
  rowIndex: number
  numberIndex: number
  onClick?: () => void
  onMouseEnter?: () => void
  highlight?: CssColors
}

export const Number: FC<NumberProps> = ({rowIndex, numberIndex, highlight, children, ...props}) => {
  const highlightFromPropsOrHook = (highlight) ? highlight : useIsHighlighted(rowIndex, numberIndex)

  return (
    <StyledNumber
      highlight={highlightFromPropsOrHook}
      {...props}
    >
      {children}
    </StyledNumber>
  )
}

