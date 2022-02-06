import type {Triangle, NumberOrNull, Index} from '@/src/types'

export const hockeyStick = (triangle: Triangle, [selectedRow, selectedNumber]: Index): NumberOrNull => {
  if (selectedRow === selectedNumber) {
    return []
  }

  const numberOfEmptyRows = selectedRow - 1 - selectedNumber
  const indexes: NumberOrNull = new Array<number|null>(numberOfEmptyRows).fill(null)

  for (let i = 0; i <= selectedNumber; i++) {
    indexes.push(i)
  }

  return indexes
}
