import React, { Component } from "react";
import { Router } from "@reach/router";
import NavLink from "./NavLink";

import MyEventsContainer from "../containers/MyEventsContainer";
import NewEvent from "./NewEvent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Application extends Component {
    render() {
        return (
            <div>
                <nav className="fixed md:relative pin-b z-50 w-full shadow flex items-center justify-between bg-purple-dark p-3 md:p-6">
                    <div className="w-full block flex lg:w-auto">
                        <div className="text-sm md:text-base flex-grow text-center md:text-left md:flex-auto">
                            <NavLink
                                icon={["far", "calendar-alt"]}
                                to="myEvents"
                                text="My Events"
                            />
                        </div>
                        <div className="text-sm md:text-base text-md flex-grow text-center md:text-left md:flex-auto">
                            <NavLink
                                icon={["fas", "calendar-plus"]}
                                to="newEvent"
                                text="New Event"
                            />
                        </div>
                    </div>
                </nav>
                <div className="bg-grey-light clearfix min-h-screen">
                    <div className="page container-1000 pt-4 mx-auto">
                        <Router>
                            <MyEventsContainer path="/myEvents" />
                            <NewEvent path="/newEvent" />
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;
