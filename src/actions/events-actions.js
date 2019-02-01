import { GET_EVENTS, UPDATE_EVENTS } from "../constants";

import Api from "../api";

export const getEvents = () => {
    return dispatch => {
        const events = Api.getEvents();
        dispatch({
            type: GET_EVENTS,
            events
        });
    };
};

export const updateEvent = eventToUpdate => {
    return dispatch => {
        Api.editEvent(eventToUpdate).then(data => {
            if (data.status == 200) {
                const events = data.events;
                dispatch({ type: UPDATE_EVENTS, events });
            }
        });
    };
};
