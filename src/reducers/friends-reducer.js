import uniqueId from 'lodash/uniqueId';
import { GET_FRIENDS_LIST } from "../constants";

export default function(state = [], action) {
    if (action.type === GET_FRIENDS_LIST) {
        let friends = [];
        const {data} = action;

        data.forEach(person => {
            const friend = { id: uniqueId(),  name: person.name + " " + person.surname};
            friends.push(friend);
        });

        return friends;
    }

    if (action.type === GET_FRIENDS_ERROR) {
        return [{id: 0, name: 'Cannot load friends at this time'}]
    }

    return state;
}
