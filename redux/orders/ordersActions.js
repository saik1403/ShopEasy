import { STORE_ORDERS } from './ordersTypes';
const storeOrders = (orders) =>{
    return{
        type:STORE_ORDERS,
        payload:orders
    }
}
export {storeOrders}