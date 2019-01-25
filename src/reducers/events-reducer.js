import { GET_EVENTS } from "../constants";

export default function(state = [], action) {
    if (action.type === GET_EVENTS) {
        return action.events;
    }
    return state;
}
