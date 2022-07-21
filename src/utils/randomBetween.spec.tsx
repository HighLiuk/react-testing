import { randomBetween } from "./randomBetween"

it("should be greater than 3 when called with min=3 and max=5", () => {
  expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3)
})
