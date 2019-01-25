import {
    RESET_EVENT,
    SET_CURRENT_EVENT,
    UPDATE_EVENT_VALUES,
    POST_EVENT,
    ADD_GUESTS,
    REMOVE_GUESTS
} from "../constants";

const resetEvent = {
    id: 0,
    name: "",
    datetimeStart: "",
    datetimeEnd: "",
    address: {
        street: "",
        city: "",
        state: "",
        zipcode: ""
    },
    description: "",
    guests: []
};

export default function(state = {}, action) {
    if (action.type === SET_CURRENT_EVENT) {
        const { events, id } = action.payload;
        if (id !== 0) {
            return events.find(event => event.id === id);
        }
    }

    if (action.type === RESET_EVENT) {
        return resetEvent;
    }

    if (action.type === UPDATE_EVENT_VALUES) {
        const { name, value } = action.field;
        let newState = {};
        Object.assign(newState, state);
        if (
            name === "street" ||
            name === "city" ||
            name === "zipcode" ||
            name === "state"
        ) {
            newState.address[name] = value;
        } else {
            newState[name] = value;
        }
        return newState;
    }

    if (action.type === ADD_GUESTS) {
        let { guest } = action;
        guest.status = "I";
        state.guests.push(guest);
        return state;
    }

    if (action.type === REMOVE_GUESTS) {
        const { guestToRemove } = action;
        const updatedGuests = state.guests.filter(
            guest => guest.id != guestToRemove.id
        );
        state.guests = updatedGuests;
        return state;
    }

    if (action.type === POST_EVENT) {
        console.log(state);
    }

    return state;
}
