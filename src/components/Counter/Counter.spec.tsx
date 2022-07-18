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
      expect(currentCount(0)).toBeInTheDocument()
    })

    it("should add 1 when the increment button is clicked", async () => {
      await clickOnAdd()

      expect(currentCount(1)).toBeInTheDocument()
    })

    it("should subtract 1 when the decrement button is clicked", async () => {
      await clickOnSubtract()

      expect(currentCount(-1)).toBeInTheDocument()
    })
  })

  describe("Incrementor Textbox", () => {
    it("should have an incrementor textbox", () => {
      expect(incrementor()).toBeInTheDocument()
    })

    it("should be able to change the incrementor value", async () => {
      await typeIntoIncrementor(5)

      expect(incrementor().value).toBe("5")
    })

    it("should add the incrementor value when the increment button is clicked", async () => {
      await typeIntoIncrementor(5)
      await clickOnAdd()

      expect(currentCount(5)).toBeInTheDocument()
    })

    it.todo(
      "should subtract the incrementor value when the decrement button is clicked"
    )
  })
})

function currentCount(count: number) {
  const pattern = new RegExp(`Current Count: ${count}`, "i")

  return screen.getByText(pattern)
}

function incrementor(): HTMLInputElement {
  return screen.getByRole("spinbutton")
}

async function typeIntoIncrementor(number: number) {
  const { length } = incrementor().value

  await userEvent.type(incrementor(), number.toString(), {
    initialSelectionStart: 0,
    initialSelectionEnd: length,
  })
}

async function clickOnAdd() {
  await userEvent.click(screen.getByRole("button", { name: /add/i }))
}

async function clickOnSubtract() {
  await userEvent.click(screen.getByRole("button", { name: /subtract/i }))
}
