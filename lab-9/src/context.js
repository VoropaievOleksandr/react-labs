import React, { createContext, useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        sideBarOpen,
        setSideBarOpen,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
