import * as constants from "../constants";
import { getEvents } from "../actions/event-actions";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
    new Promise((resolve, reject) => {
        setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

describe('authenticate action', () => {
    let store;
    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore({ friends: [], loginCredentials: {} });
    });

    describe('when a user logins', () => {
        it('fires a login request action', () =>
            store
                .dispatch(login(
                    { username: 'user', password: 'pass' },
                    mockServiceCreator(REQUIRED_BODY),
                ))
                .then(() => expect(store.getActions()).toContainEqual({ type: USER_LOGIN })));

    describe('on login success', () => {
        beforeEach(() =>
            store.dispatch(login(
                { username: 'user', password: 'pass' },
                mockServiceCreator(REQUIRED_BODY),
            )));

        it('dispatches action to get friends and updates the route', () => {
            const actions = store.getActions();
            const { friends } = REQUIRED_BODY;
            expect(actions).toContainEqual({
                type: GET_EVENTS,
                events,
            });
            expect(actions).toContainEqual(push('/myEvents'));
        });
    });
}