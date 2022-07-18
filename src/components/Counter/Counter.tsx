import { FC } from "react"

type Props = {
  description: string
}

const Counter: FC<Props> = ({ description }) => {
  const count = 0

  return (
    <>
      <h1>{description}</h1>

      <div>Current Count: {count}</div>
    </>
  )
}

export default Counter
