import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "./Button"

it("should call the action with 33", async () => {
  const action = jest.fn()

  render(<Button action={action} />)

  await userEvent.click(screen.getByRole("button"))

  expect(action).toHaveBeenCalledTimes(1)
  expect(action).toHaveBeenCalledWith(33)
})
