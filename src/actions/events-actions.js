import { GET_EVENTS } from "../constants";

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
