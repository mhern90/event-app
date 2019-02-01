import uniqueId from "lodash/uniqueId";
import {
    GET_FRIENDS_LIST,
    GET_FRIENDS_ERROR,
    GET_MY_FRIENDS
} from "../constants";

export default function(state = [], action) {
    if (action.type === GET_FRIENDS_LIST) {
        let friends = [];
        const { data } = action;

        data.forEach(person => {
            const friend = {
                id: uniqueId(),
                name: person.name + " " + person.surname
            };
            friends.push(friend);
        });

        localStorage.setItem("friends", JSON.stringify(friends));

        return friends;
    }

    if (action.type === GET_FRIENDS_ERROR) {
        return [{ id: 0, name: "Cannot load friends at this time" }];
    }

    if (action.type === GET_MY_FRIENDS) {
        let friends = localStorage.getItem("friends");
        if (friends !== null) {
            friends = JSON.parse(friends);
        }

        return friends;
    }

    return state;
}
