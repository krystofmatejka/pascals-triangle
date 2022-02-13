import {highlightHockeyStick} from './triangle-hockey-stick'
import {CssColors} from '@/src/constants'

const triangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
]

describe(highlightHockeyStick.name, () => {
  test('5x1', () => expect(
    highlightHockeyStick(triangle, 5, 1))
    .toEqual([
      [3, [0], CssColors.Highlight1],
      [4, [1], CssColors.Highlight1],
      [5, [1], CssColors.Highlight2],
    ]))

  test('4x4', () => expect(
    highlightHockeyStick(triangle, 4, 4))
    .toEqual([
      [4, [4], CssColors.Highlight2],
    ]))

  test('5x2', () => expect(
    highlightHockeyStick(triangle, 5, 2))
    .toEqual([
      [2, [0], CssColors.Highlight1],
      [3, [1], CssColors.Highlight1],
      [4, [2], CssColors.Highlight1],
      [5, [2], CssColors.Highlight2],
    ]))
})
