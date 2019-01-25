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
    saveEvent(event) {
        dispatch(postEvent(event));
    },
    setCurrentEvent(id) {
        dispatch(setCurrentEvent(id));
    },
    resetCurrentEvent() {
        dispatch(resetCurrentEvent());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEventForm);
