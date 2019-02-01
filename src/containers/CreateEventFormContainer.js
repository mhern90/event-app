import { connect } from "react-redux";

import CreateEventForm from "../components/CreateEventForm";
import {
    updateEventValues,
    addGuestToEvent,
    removeGuestFromEvent,
    postEvent,
    setCurrentEvent,
    resetCurrentEvent
} from "../actions/event-actions";

import { updateEvent } from "../actions/events-actions";

import { getMyFriends } from "../actions/friends-actions";

const mapStateToProps = ({ currentEvent, friends }) => {
    return { event: currentEvent, friends };
};

const mapDispatchToProps = dispatch => ({
    onFieldChange(field) {
        dispatch(updateEventValues(field));
    },
    addGuestToEvent(guest) {
        dispatch(addGuestToEvent(guest));
    },
    removeGuestFromEvent(guestToRemove) {
        dispatch(removeGuestFromEvent(guestToRemove));
    },
    saveNewEvent(event) {
        dispatch(postEvent(event));
    },
    updateEvent(event) {
        dispatch(updateEvent(event));
    },
    setCurrentEvent(id) {
        dispatch(setCurrentEvent(id));
    },
    resetCurrentEvent() {
        dispatch(resetCurrentEvent());
    },
    getMyFriends() {
        dispatch(getMyFriends());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEventForm);
