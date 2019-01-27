import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    VERIFY_LOGIN
} from "../constants";

export default function(state = {}, action) {
    if (action.type === USER_LOGIN_SUCCESS) {
        const { token } = action.data;
        let newState = Object.assign({}, state);
        localStorage.setItem("authToken", token);
        newState.isAuthorized = true;
        newState.token == token;
        return newState;
    }

    if (action.type === USER_LOGIN_FAIL) {
        let newState = Object.assign({}, state);
        const errors = action.error;
        newState.formErrors = errors;
        return newState;
    }

    if (action.type === USER_LOGOUT) {
        let newState = Object.assign({}, state);
        localStorage.setItem("authToken", null);
        newState.isAuthorized = false;
        newState.token = null;
        return newState;
    }

    if (action.type === VERIFY_LOGIN) {
        const authToken = localStorage.getItem("authToken");
        let newState = Object.assign({}, state);
        if (authToken !== "null" && authToken != null) {
            newState.isAuthorized = true;
            newState.token = authToken;
        }
        return newState;
    }

    return state;
}
