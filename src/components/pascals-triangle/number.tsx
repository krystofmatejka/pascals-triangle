import {FC} from 'react'
import {useIsHighlighted} from '@/src/store'
import {Number as StyledNumber} from './styles'
import {CssColors} from '@/src/constants'

type NumberPropsRequired = {
  rowIndex: number
  numberIndex: number
}

export type NumberProps = {
  onClick?: () => void
  onMouseEnter?: () => void
  highlight?: CssColors
}

export const Number: FC<NumberPropsRequired & NumberProps> = ({rowIndex, numberIndex, highlight, children, ...props}) => {
  const highlightFromPropsOrHook = (highlight) ? highlight : useIsHighlighted(rowIndex, numberIndex)

  return (
    <StyledNumber
      highlight={highlightFromPropsOrHook}
      clickable={!!(props.onClick)}
      {...props}
    >
      {children}
    </StyledNumber>
  )
}
