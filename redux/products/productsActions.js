import { STORE_PRODUCTS } from "./productsTypes";
const storeProducts = (electronics) => {
    return {
        type:STORE_PRODUCTS,
        payload:electronics
    }
}
export { storeProducts };