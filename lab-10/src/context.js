import React, { useContext, useReducer } from "react"
import cartItems from "./data"
import reducer from "./reducer"

const url = "https://course-api.com/react-useReducer-cart-project"
const AppContext = React.createContext()

const initState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  const getTotal = () => {
    dispatch({ type: "GET_TOTAL" })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        getTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
