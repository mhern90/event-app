import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EventsSidebar extends Component {
    state = { hideList: true };

    toggleList = () => {
        this.setState({
            hideList: !this.state.hideList
        });
    };

    handleNavChange = id => {
        const { toggleEventDetail } = this.props;
        this.setState({
            hideList: true
        });
        toggleEventDetail(id);
    };

    render() {
        const { eventList, selectedId } = this.props;
        const { hideList } = this.state;
        return (
            <div className="bg-grey-lightest mx-2 md:mr-4 shadow">
                <div className="flex w-full items-center">
                    <h2 className="pl-4 py-4 font-light flex-grow">
                        Event List
                    </h2>
                    <span
                        onClick={this.toggleList}
                        className="cursor-pointer px-4 py-4 align-right md:hidden"
                    >
                        <FontAwesomeIcon icon={"chevron-down"} size="1x" />
                    </span>
                </div>
                <ul className={hideList ? "hidden md:block pb-6" : "pb-6"}>
                    {eventList.map(event => (
                        <li
                            className="cursor-pointer px-4 py-2 text-sm"
                            role="eventlink"
                            id={event.id}
                            key={event.id}
                        >
                            <a
                                className={
                                    "hover:text-purple-dark" +
                                    (selectedId == event.id
                                        ? " text-purple-dark"
                                        : " text-grey-dark ")
                                }
                                onClick={() => this.handleNavChange(event.id)}
                            >
                                {event.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
