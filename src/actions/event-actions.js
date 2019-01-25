import {
    SET_CURRENT_EVENT,
    UPDATE_EVENT_VALUES,
    ADD_GUESTS,
    REMOVE_GUESTS,
    POST_EVENT,
    RESET_EVENT
} from "../constants";
import Api from "../api";

export const updateEventValues = field => ({
    type: UPDATE_EVENT_VALUES,
    field
});

export const addGuestToEvent = guest => ({
    type: ADD_GUESTS,
    guest
});

export const removeGuestFromEvent = guestToRemove => ({
    type: REMOVE_GUESTS,
    guestToRemove
});

export const resetCurrentEvent = () => ({
    type: RESET_EVENT
});

export const setCurrentEvent = id => {
    return (dispatch, getState) => {
        const state = getState();
        const { events } = state;
        dispatch({
            type: SET_CURRENT_EVENT,
            payload: { events, id }
        });
    };
};

export const postEvent = () => {
    return (dispatch, getState) => {
        const state = getState();
        const { currentEvent, events } = state;
        Api.postEvent(currentEvent);
        dispatch({
            type: POST_EVENT,
            payload: { currentEvent, events }
        });
    };
};
