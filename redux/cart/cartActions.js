import { ADD_TO_CART, DELETE_ITEM } from "./cartTypes";
const addToCart = (product) =>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}
const deleteItem = (id)=>{
    return{
        type:DELETE_ITEM,
        payload:id
    }
}

export {addToCart,deleteItem};