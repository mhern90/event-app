import { combineReducers } from "redux";

import currentEvent from "./event-reducer";
import events from "./events-reducer";
import friends from "./friends-reducer";

export default combineReducers({
    currentEvent,
    events,
    friends
});
