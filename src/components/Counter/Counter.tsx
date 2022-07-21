import { ChangeEventHandler, FC, useState } from "react"

type Props = {
  description: string
}

const Counter: FC<Props> = ({ description }) => {
  const [count, setCount] = useState(0)
  const [incrementor, setIncrementor] = useState(1)
  const [loading, setLoading] = useState(false)

  const increment = () => {
    setLoading(true)
    setTimeout(() => {
      setCount((prev) => prev + incrementor)
      setLoading(false)
    }, 200)
  }

  const decrement = () => {
    setCount((prev) => prev - incrementor)
  }

  const updateIncrementor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIncrementor(+e.target.value)
  }

  return (
    <>
      <h1>{description}</h1>

      <div>
        <label htmlFor="incrementor">Increment Value:</label>

        <input
          type="number"
          id="incrementor"
          value={incrementor}
          onChange={updateIncrementor}
        />
      </div>

      <div>Current Count: {count}</div>

      <button type="button" onClick={increment}>
        ADD
      </button>

      <button type="button" onClick={decrement}>
        SUBTRACT
      </button>

      {/* Spinner */}
      {loading && <div>Loading...</div>}
    </>
  )
}

export default Counter
