import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"

describe("Counter", () => {
  beforeEach(() => render(<Counter description="My Counter" />))

  describe("Incrementing and decrementing", () => {
    it("should have a description", () => {
      expect(screen.getByText(/My Counter/i)).toBeInTheDocument()
    })

    it("should start with 0", () => {
      expect(screen.getByText(/Current Count: 0/i)).toBeInTheDocument()
    })

    it("should add 1 when the increment button is clicked", async () => {
      await userEvent.click(screen.getByRole("button", { name: /add/i }))

      expect(screen.getByText(/Current Count: 1/i)).toBeInTheDocument()
    })

    it("should subtract 1 when the decrement button is clicked", async () => {
      await userEvent.click(screen.getByRole("button", { name: /subtract/i }))

      expect(screen.getByText(/Current Count: -1/i)).toBeInTheDocument()
    })
  })

  describe("Incrementor Textbox", () => {
    it.todo("should have an incrementor textbox")

    it.todo("should be able to change the incrementor value")

    it.todo(
      "should add the incrementor value when the increment button is clicked"
    )

    it.todo(
      "should subtract the incrementor value when the decrement button is clicked"
    )
  })
})
