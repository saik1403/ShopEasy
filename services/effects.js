import { loginapi, createAccount, getProducts, placeOrder,getOrders } from "./apicalls";
import { storeUsers } from "../redux/users/usersActions";
import { exp } from "react-native/Libraries/Animated/Easing";
import { storeProducts } from "../redux/products/productsActions";
import { storeOrders } from "../redux/orders/ordersActions";
export const callLoginApi = (user) => async (dispatch) => {
    let data = await loginapi(user);
    console.log("data from api", data);
    if (data.user && data.user.blocked === null && data.user.confirmed === true) {
        const user = { jwt: data.jwt, id: data.user.id, username: data.user.username, email: data.user.email };
        dispatch(storeUsers(user));
        return true;
    }
    return false;
}
export const callSignUpApi = (user) => async () => {
    console.log(user);
    let data = await createAccount(user);
    console.log(data);
    if (data.error == "Bad Request") {
        //console.log("at status 400", data.message[0].messages[0].message);
        return data.message[0].messages[0].message;
    }
    else {
        return "success";
    }
}
export const callGetProducts = (category, user) => async (dispatch) => {
    console.log(user, category);
    let data = await getProducts(category, user);
    console.log(data);
    if (data) {
        dispatch(storeProducts(data));
    }
    return false;
}
export const callPlaceOrders = (orders, user) => async () => {
    console.log(orders, user);
    let data = await placeOrder(orders, user);
    console.log(data);
    if (data) {
        return true;
    }
    return false;
}
export const callGetOrders = (user) => async (dispatch) => {
    console.log(user);
    let data = await getOrders(user);
    console.log(data);
    if (data.error == "Bad Request") {
        return false;
    }
    else{
        dispatch(storeOrders(data));
        return true;
    }
}