const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] }
    case "REMOVE":
      return { ...state, cart: state.cart.filter((i) => i.id !== action.payload) }
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((i) => {
          if (i.id === action.payload) return { ...i, amount: i.amount + 1 }

          return i
        }),
      }
    case "DECREASE":
      const cart = [...state.cart]
      const itemIndex = cart.findIndex((i) => i.id === action.payload)
      if (cart[itemIndex].amount - 1 > 0) --cart[itemIndex].amount
      else cart.splice(itemIndex, 1)
      return {
        ...state,
        cart,
      }
    case "GET_TOTAL":
      const total = state.cart.reduce((cartTotal, cartItem) => cartTotal + cartItem.amount * cartItem.price, 0)
      console.log("t", total)
      return {
        ...state,
        total,
      }
    default:
      return state
  }
}

export default reducer
