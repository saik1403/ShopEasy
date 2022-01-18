import { ADD_TO_CART, DECREMENT_COUNT, DELETE_ITEM, INCREMENT_COUNT } from "./cartTypes";
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
const incrementCount = (id)=>{
    return{
        type:INCREMENT_COUNT,
        payload:id
    }
}
const decrementCount = (id) =>{
    return{
        type:DECREMENT_COUNT,
        payload:id
    }
}

export {addToCart,deleteItem,incrementCount,decrementCount};