import { render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe("Counter", () => {
  beforeEach(() => render(<Counter description="My Counter" />))

  it("should have a description", () => {
    expect(screen.getByText(/My Counter/i)).toBeInTheDocument()
  })

  it.todo("should start with 0")

  it.todo("should add 1 when the increment button is clicked")

  it.todo("should subtract 1 when the decrement button is clicked")
})
