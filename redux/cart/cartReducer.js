import { ADD_TO_CART, DELETE_ITEM } from "./cartTypes";
const initialState = {
    cart: []
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newcart = state.cart.push(action.payload);
            console.log(newcart);
            return {
                ...state,
            }
        case DELETE_ITEM:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        default: return state
    }
}
export default cartReducer