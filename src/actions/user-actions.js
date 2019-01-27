import { USER_LOGIN_SUCCESS, USER_LOGOUT, VERIFY_LOGIN } from "../constants";
import Api from "../api";

export const login = credentials => {
    return dispatch => {
        Api.loginUser(credentials).then(data => {
            dispatch({ type: USER_LOGIN_SUCCESS, data });
        });
    };
};

export const logout = () => ({ type: USER_LOGOUT });

export const verifyLogin = () => ({
    type: VERIFY_LOGIN
});
