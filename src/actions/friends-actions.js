import {
    GET_FRIENDS_LIST,
    GET_FRIENDS_ERROR,
    GET_MY_FRIENDS
} from "../constants";

// Randomly Generate a friends list
export const getFriendsList = () => {
    return dispatch => {
        fetch("https://uinames.com/api/?region=united+states&amount=10")
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_FRIENDS_LIST,
                    data
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_FRIENDS_ERROR
                });
            });
    };
};

export const getMyFriends = () => ({
    type: GET_MY_FRIENDS
});
