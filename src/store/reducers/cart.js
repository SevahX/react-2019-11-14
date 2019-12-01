export const cartReducer = (
  cartState = {
    //  id: <dish's amount>
  },
  action
) => {
  const {id} = action.payload ? action.payload : {id: undefined}
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }

    case 'REMOVE_FROM_CART':
      return {
        ...cartState,
        [id]: cartState[id] && cartState[id] - 1 > 0 ? cartState[id] - 1 : 0,
      }
  }
  return cartState
}
