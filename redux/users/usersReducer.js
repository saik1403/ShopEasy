import { STORE_USER } from "./usersTypes";
const initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER:
            return {
                ...state,
                users: action.payload
            }
        default: return state
    }
}
export default usersReducer;