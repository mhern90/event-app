import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    VERIFY_LOGIN
} from "../constants";
import { getEvents } from "../actions/events-actions";
import Api from "../api";

export const login = credentials => {
    return dispatch => {
        Api.loginUser(credentials)
            .then(data => {
                dispatch({ type: USER_LOGIN_SUCCESS, data });
                dispatch(getEvents());
            })
            .catch(error => {
                dispatch({ type: USER_LOGIN_FAIL, error });
            });
    };
};

export const logout = () => ({ type: USER_LOGOUT });

export const verifyLogin = () => ({
    type: VERIFY_LOGIN
});
