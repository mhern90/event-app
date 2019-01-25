import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLink = props => {
    return (
        <div>
            <Link
                {...props}
                getProps={({ isCurrent }) => {
                    // the object returned here is passed to the
                    // anchor element's props
                    return {
                        className: isCurrent
                            ? "block lg:inline-block hover:text-white m-0 md:mr-4 text-white"
                            : "block lg:inline-block hover:text-white m-0 md:mr-4 text-purple-lighter",
                        isCurrent: true
                    };
                }}
            >
                <div className="md:hidden pb-1">
                    <FontAwesomeIcon
                        icon={props.icon}
                        style={{ color: "white" }}
                        size="3x"
                    />
                </div>
                {props.text}
            </Link>
        </div>
    );
};

export default NavLink;
