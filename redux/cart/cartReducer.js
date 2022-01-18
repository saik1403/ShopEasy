import { ADD_TO_CART, DECREMENT_COUNT, DELETE_ITEM, INCREMENT_COUNT } from "./cartTypes";
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
        case INCREMENT_COUNT:
            let obj = state.cart.find((o, i) => {
                if (o.id === action.payload) {
                    state.cart[i].count = state.cart[i].count + 1;
                    return true; // stop searching
                }
            });
            return {
                ...state,
            }
        case DECREMENT_COUNT:
            let temp = state.cart.find((o, i) => {
                if (o.id === action.payload) {
                    if(state.cart[i].count>1){
                        state.cart[i].count = state.cart[i].count - 1;
                    }
                    return true; // stop searching
                }
            });
            return {
                ...state,
            }
        default: return state
    }
}
export default cartReducer