import * as constants from "../constants";

import {
    updateEventValues,
    addGuestToEvent,
    removeGuestFromEvent,
    resetCurrentEvent
} from "../actions/event-actions";

describe("Event Actions", () => {
    describe("updateEventValues", () => {
        it("should return UPDATE_EVENT_VALUES as the type", () => {
            const action = updateEventValues({
                name: "name",
                value: "My Sweet Event"
            });
            expect(action.type).toBe(constants.UPDATE_EVENT_VALUES);
        });

        it("should return the name and value of the form field submitted on", () => {
            const field = {
                name: "name",
                value: "My Sweet Event"
            };
            const action = updateEventValues(field);
            expect(action.field.name).toBe(field.name);
            expect(action.field.value).toBe(field.value);
        });
    });

    describe("addGuestToEvent", () => {
        it("should return ADD_GUESTS as the type", () => {
            const action = addGuestToEvent({
                id: 1,
                name: "Sweet Caroline",
                status: "I"
            });
            expect(action.type).toBe(constants.ADD_GUESTS);
        });

        it("should return an object id, guest name and invitation status", () => {
            const guest = { id: 1, name: "Sweet Caroline", status: "I" };
            const action = addGuestToEvent(guest);
            expect(action.guest.id).toBe(guest.id);
            expect(action.guest.name).toBe(guest.name);
            expect(action.guest.status).toBe(guest.status);
        });
    });

    describe("removeGuestFromEvent", () => {
        it("should return REMOVE_GUESTS as the type", () => {
            const action = removeGuestFromEvent({
                id: 5,
                name: "Joffrey Baratheon",
                status: "I"
            });
            expect(action.type).toBe(constants.REMOVE_GUESTS);
        });
    });

    describe("resetCurrentEvent", () => {
        it("should return RESET_EVENT as the type", () => {
            const action = resetCurrentEvent();
            expect(action.type).toBe(constants.RESET_EVENT);
        });
    });

    // TODO: Learn how to test thunks
});
