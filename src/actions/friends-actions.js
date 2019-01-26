import { GET_FRIENDS_LIST } from "../constants";

// At some point this would be an async fetch from an API endpoint
export const getFriendsList = () => {
    return (dispatch) => {

        fetch('https://uinames.com/api/?region=united+states&amount=10').then(res => {
            return res.json()
        }).then(data => {
            dispatch({
                type: GET_FRIENDS_LIST,
                data
            })
        }).catch(err => {
            dispatch({
                type: GET_FRIENDS_ERROR
            })
        });
    }
}
