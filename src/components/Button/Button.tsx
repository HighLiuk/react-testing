import { FC } from "react"

type Props = {
  action: (n: number) => void
}

const Button: FC<Props> = ({ action }) => {
  return <button onClick={() => action(33)}>Click me!</button>
}

export default Button
