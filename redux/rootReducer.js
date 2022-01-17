import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import usersReducer from './users/usersReducer';
import cartReducer from './cart/cartReducer';
import ordersReducer from './orders/ordersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
})

export default rootReducer;