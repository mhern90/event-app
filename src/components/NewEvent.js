import React, { Component } from "react";
import CreateEventFormContainer from "../containers/CreateEventFormContainer";

class NewEvent extends Component {
    render() {
        return (
            <div className="container-800">
                <h1 className="text-center pb-4">Create New Event</h1>
                <div className="px-4 pt-4 mb-6 event-details shadow bg-grey-lightest w-full">
                    <CreateEventFormContainer newEvent={true} />
                </div>
            </div>
        );
    }
}

export default NewEvent;
