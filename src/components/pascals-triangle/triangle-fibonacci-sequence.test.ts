import {
  highlightAndSum,
} from './triangle-fibonacci-sequence'
import {CssColors} from '@/src/constants'

const triangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
]

describe.only(highlightAndSum.name, () => {
  test('highlightAndSum', () => {
    expect(highlightAndSum(5, 6, triangle)).toEqual({
      fibonacci: 8,
      highlights: [
        [3, [2], CssColors.Highlight1],
        [4, [1], CssColors.Highlight1],
        [5, [0], CssColors.Highlight1],
      ],
    })
  })
})
