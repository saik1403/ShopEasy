import { loginapi } from "./apicalls";
import { storeUsers } from "../redux/users/usersActions";
export const callLoginApi = (user) => async (dispatch) => {
    let data = await loginapi(user);
    console.log("data from api",data);
    if (data.user && data.user.blocked === null && data.user.confirmed === true) {
        const user = { jwt: data.jwt, id: data.user.id, username: data.user.username, email: data.user.email };
        dispatch(storeUsers(user));
        return "hello";
    }
    return "hello false";
}