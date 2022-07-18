import { render, screen } from "@testing-library/react"
import Hello from "./Hello"

it('renders a "Hello World!"', () => {
  render(<Hello />)
  const myEl = screen.getByText("Hello World!")
  expect(myEl).toBeInTheDocument()
})
