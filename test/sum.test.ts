import { sum } from '../src/sum'

test('sum', (): void => {
  const expected = 3
  const actual = sum(1, 2)

  expect(actual).toBe(expected)
})
