import { connect } from "react-redux";

import MyEvents from "../components/MyEvents";

import { setCurrentEvent, resetCurrentEvent } from "../actions/event-actions";
import { getEvents } from "../actions/events-actions";
import { getFriendsList } from "../actions/friends-actions";

const mapStateToProps = ({ events, friends, currentEvent }) => {
    return { events, friends, currentEvent };
};

const mapDispatchToProps = dispatch => ({
    getEvents() {
        dispatch(getEvents());
    },
    setCurrentEvent(id) {
        dispatch(setCurrentEvent(id));
    },
    resetCurrentEvent() {
        dispatch(resetCurrentEvent());
    },
    getFriendsList() {
        dispatch(getFriendsList());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEvents);
