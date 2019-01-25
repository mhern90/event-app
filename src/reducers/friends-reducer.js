import { GET_FRIENDS_LIST } from "../constants";

export default function(state = [], action) {
    if (action.type === GET_FRIENDS_LIST) {
        return state;
    }

    return state;
}
