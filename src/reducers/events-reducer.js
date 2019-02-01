import { GET_EVENTS, UPDATE_EVENTS } from "../constants";

export default function(state = [], action) {
    if (action.type === GET_EVENTS) {
        return action.events;
    }

    if (action.type === UPDATE_EVENTS) {
        const { events } = action;
        const updatedEvents = [...events];
        return updatedEvents;
    }

    return state;
}
