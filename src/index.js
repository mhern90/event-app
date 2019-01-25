import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import Application from "./components/Application";
import "./reset.css";
import "./style.css";
import "./css/tailwind.css";

import "./fontawesome";

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById("root")
);
