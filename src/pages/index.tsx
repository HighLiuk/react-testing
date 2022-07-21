import type { NextPage } from "next"
import { Counter } from "../components/Counter"

const Home: NextPage = () => {
  return (
    <>
      <Counter description="My Description" />
    </>
  )
}

export default Home
