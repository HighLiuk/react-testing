import { FC } from "react"

type Props = {
  description: string
}

const Counter: FC<Props> = ({ description }) => {
  return (
    <>
      <div>{description}</div>
    </>
  )
}

export default Counter
