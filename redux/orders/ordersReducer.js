import { STORE_ORDERS } from "./ordersTypes";
const initialState = {
    orders: {}
}
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default: return state
    }
}

export default ordersReducer;