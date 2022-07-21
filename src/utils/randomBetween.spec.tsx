import { randomBetween } from "./randomBetween"

const randomSpy = jest.spyOn(Math, "random")

it("should be greater than 3 when called with min=3 and max=5", () => {
  expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3)
})

const tests = [
  {
    randomReturn: 0,
    expectedReturn: 3,
  },
  {
    randomReturn: 0.5,
    expectedReturn: 4,
  },
  {
    randomReturn: 0.99999,
    expectedReturn: 5,
  },
]

for (const { randomReturn, expectedReturn } of tests) {
  describe(`when Math.random() returns ${randomReturn}`, () => {
    beforeEach(() => {
      randomSpy.mockReturnValue(randomReturn)
    })

    it(`should return ${expectedReturn} when called with min=3 and max=5`, () => {
      expect(randomBetween(3, 5)).toBe(expectedReturn)
    })
  })
}
