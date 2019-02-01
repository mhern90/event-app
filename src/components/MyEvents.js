import React, { Component } from "react";
import EventsSidebar from "./EventsSidebar";
import CreateEventFormContainer from "../containers/CreateEventFormContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

class MyEvents extends Component {
    state = {
        selectedId: 0,
        isEditing: false
    };

    componentDidMount() {
        const { getEvents } = this.props;
        getEvents();
    }

    componentDidUpdate(prevProps, prevState) {
        let { selectedId } = prevState;
        const { events } = this.props;

        let firstEvent = {};

        if (selectedId === 0) {
            firstEvent = events[0];
            this.toggleEventDetail(firstEvent.id);
        }
    }

    componentWillUnmount() {
        this.props.resetCurrentEvent();
    }

    createEventList = () => {
        const { events } = this.props;
        const eventList = events.map(event => {
            return {
                id: event.id,
                name: event.name
            };
        });

        return eventList;
    };

    toggleEventDetail = id => {
        this.setState(
            {
                selectedId: id
            },
            this.props.setCurrentEvent(id)
        );
    };

    toggleEditMode = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    closeEditMode = () => {
        this.setState({ isEditing: false });
    };

    filterGuests = (guests, status) => {
        let filteredGuests = [];

        guests.forEach(guest => {
            if (guest.status === status) {
                filteredGuests.push(guest.name);
            }
        });

        if (!filteredGuests) {
            return "";
        }

        filteredGuests =
            filteredGuests.length > 1
                ? filteredGuests.join(", ")
                : filteredGuests[0];

        return filteredGuests;
    };

    render() {
        const { isEditing } = this.state;
        const { currentEvent, events } = this.props;
        const eventList = this.createEventList();

        const invitedGuests = this.filterGuests(currentEvent.guests, "I");
        const attendingGuests = this.filterGuests(currentEvent.guests, "A");
        const notAttendingGuests = this.filterGuests(currentEvent.guests, "N");

        const startTime = moment(currentEvent.datetimeStart).format("LT");
        const endTime = moment(currentEvent.datetimeEnd).format("LT");

        return (
            <div>
                <div className="flex pb-4">
                    <h1 className="text-center content-center w-full">
                        My Events
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="w-full md:w-1/4 pb-5 md:pb-0">
                        <EventsSidebar
                            selectedId={this.state.selectedId}
                            eventList={eventList}
                            toggleEventDetail={this.toggleEventDetail}
                        />
                    </div>
                    <div
                        id="eventDetail"
                        className="w-full md:w-3/4 px-2 md:px-0"
                    >
                        {events.length === 0 ? (
                            <p>You have no events!</p>
                        ) : (
                            <div className="px-4 pt-4 pb-6 event-details shadow bg-grey-lightest w-full">
                                <div className="pb-2 clearfix">
                                    <button
                                        className={
                                            "text-white py-2 px-4 rounded float-right " +
                                            (isEditing
                                                ? "bg-red hover:bg-red-dark"
                                                : "bg-purple-dark hover:bg-purple-darker")
                                        }
                                        onClick={this.toggleEditMode}
                                    >
                                        {isEditing ? "Cancel" : "Edit"}
                                    </button>
                                </div>
                                {!isEditing ? (
                                    <div id="staticEventDetail">
                                        <div className="border-b pb-4 lg:p-4">
                                            <h2 className="pb-2 bold">
                                                {currentEvent.name}
                                            </h2>
                                            <p>{currentEvent.description}</p>
                                        </div>
                                        <div className="pb-4 lg:p-4">
                                            <div className="pb-2">
                                                <span className="pr-2">
                                                    <FontAwesomeIcon
                                                        icon={"map-marker-alt"}
                                                        style={{
                                                            color: "grey"
                                                        }}
                                                    />
                                                </span>
                                                <span>
                                                    {currentEvent.address
                                                        .street +
                                                        " " +
                                                        currentEvent.address
                                                            .city +
                                                        ", " +
                                                        currentEvent.address
                                                            .state +
                                                        " " +
                                                        currentEvent.address
                                                            .zipcode}
                                                </span>
                                            </div>
                                            <div className="pb-2">
                                                <span className="pr-2">
                                                    <FontAwesomeIcon
                                                        icon={["far", "clock"]}
                                                        style={{
                                                            color: "grey"
                                                        }}
                                                    />
                                                </span>
                                                <span>
                                                    {startTime +
                                                        " - " +
                                                        endTime}
                                                </span>
                                            </div>
                                            <h3 className="py-2">Guests</h3>
                                            <div className="pb-2">
                                                Invited: {invitedGuests}
                                            </div>
                                            <div className="pb-2">
                                                Attending: {attendingGuests}
                                            </div>
                                            <div className="pb-2">
                                                Can't Make It:{" "}
                                                {notAttendingGuests}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <CreateEventFormContainer
                                        closeEditMode={this.closeEditMode}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyEvents;
