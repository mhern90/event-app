import { GET_FRIENDS_LIST } from "../constants";

// At some point this would be an async fetch from an API endpoint
export const getFriendsList = () => ({
    type: GET_FRIENDS_LIST
});
