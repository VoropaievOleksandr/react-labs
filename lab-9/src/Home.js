import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext } from "./context"

const Home = () => {
  const { setSideBarOpen, setModalOpen } = useContext(AppContext)
  return (
    <main>
      <button className="side-toggle" onClick={() => setSideBarOpen((prev) => !prev)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Show modal
      </button>
    </main>
  )
}

export default Home
