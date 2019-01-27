import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import NavLink from "./NavLink";

import MyEventsContainer from "../containers/MyEventsContainer";
import LoginContainer from "../containers/LoginContainer";
import NewEvent from "./NewEvent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Application extends Component {
    render() {
        const { isAuthorized } = this.props.loginCredentials;
        const { logout } = this.props;

        if (isAuthorized) {
            return (
                <div>
                    <div className="bg-grey-light border-b border-grey-dark mobile-nav p-2 text-right md:hidden clearfix">
                        <button
                            onClick={logout}
                            className="block margin:auto py-2 px-4 rounded border border-purple-darkest hover:text-white hover:bg-purple-darkest m-0 md:mr-4 text-purple-darkest float-right"
                        >
                            Logout
                        </button>
                    </div>
                    <nav className="fixed md:relative pin-b z-50 w-full shadow flex items-center justify-between bg-purple-dark p-3 md:p-6">
                        <div className="w-full block flex">
                            <div className="flex w-full md:w-auto md:flex-grow">
                                <div className="flex-grow md:flex-none inline-block m-auto md:m-0 text-sm md:text-base text-center md:text-left">
                                    <NavLink
                                        icon={["far", "calendar-alt"]}
                                        to="myEvents"
                                        text="My Events"
                                    />
                                </div>
                                <div className="flex-grow md:flex-none inline-block m-auto md:m-0 text-sm md:text-base text-center md:text-left">
                                    <NavLink
                                        icon={["fas", "calendar-plus"]}
                                        to="newEvent"
                                        text="New Event"
                                    />
                                </div>
                            </div>
                            <div className="hidden md:block text-sm md:text-base text-center">
                                <button
                                    onClick={logout}
                                    className="block lg:inline-block py-2 px-4 rounded border border-purple-lighter hover:text-white hover:border-white m-0 md:mr-4 text-purple-lighter"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="bg-grey-light clearfix min-h-screen pb-150">
                        <div className="page container-1000 pt-4 mx-auto">
                            <Router>
                                <MyEventsContainer path="/myEvents" />
                                <NewEvent path="/newEvent" />
                                <Redirect from="/" to="/myEvents" />
                            </Router>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="bg-grey-light clearfix min-h-screen pb-150">
                    <div className="page container-1000 pt-4 mx-auto">
                        <Router>
                            <LoginContainer path="/" />
                            <Redirect from="/myEvents" to="/" />
                            <Redirect from="/newEvent" to="/" />
                        </Router>
                    </div>
                </div>
            );
        }
    }
}

export default Application;
