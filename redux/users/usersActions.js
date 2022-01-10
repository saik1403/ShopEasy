import { STORE_USER } from "./usersTypes";
const storeUsers = (users) => {
    return {
        type:STORE_USER,
        payload:users
    }
}
export { storeUsers };