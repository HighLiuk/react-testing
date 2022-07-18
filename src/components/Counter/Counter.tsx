import { FC, useState } from "react"

type Props = {
  description: string
}

const Counter: FC<Props> = ({ description }) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <>
      <h1>{description}</h1>

      <div>Current Count: {count}</div>

      <button type="button" onClick={increment}>
        ADD
      </button>

      <button type="button" onClick={decrement}>
        SUBTRACT
      </button>
    </>
  )
}

export default Counter
