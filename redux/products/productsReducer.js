import { STORE_PRODUCTS } from "./productsTypes";

const initialState = {
    products:{}
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
}
export default productsReducer;