import {numOrNull, Triangle} from './types'

type Index = [number, number]

export const hockeyStick = (triangle: Triangle, [selectedRow, selectedNumber]: Index) => {
  if (selectedRow === selectedNumber) {
    return []
  }

  const numberOfEmptyRows = selectedRow - 1 - selectedNumber
  const indexes: numOrNull = new Array<number|null>(numberOfEmptyRows).fill(null)

  for (let i = 0; i <= selectedNumber; i++) {
    indexes.push(i)
  }

  return indexes
}
