import {hockeyStick} from './hockey-stick'

const triangle = [
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1],
  [1,5,10,10,5,1],
]

describe(hockeyStick.name, () => {
  test('5x1', () => expect(hockeyStick(triangle, [5, 1])).toEqual([null, null, null, 0, 1]))
  test('5x2', () => expect(hockeyStick(triangle, [5, 2])).toEqual([null, null, 0, 1, 2]))
  test('4x3', () => expect(hockeyStick(triangle, [4, 3])).toEqual([0, 1, 2, 3]))
  test('4x4', () => expect(hockeyStick(triangle, [4, 4])).toEqual([]))
})
