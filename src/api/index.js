const defaultEvents = [
    {
        id: 1,
        name: "My Event",
        description:
            "This is my event. It's so cool. It's going to happen at some point in time.",
        datetimeStart: "2019-05-01 15:00:00",
        datetimeEnd: "2019-05-01 22:00:00",
        address: {
            street: "424 Sunnybrook Ln",
            city: "Wheaton",
            state: "IL",
            zipcode: "60187"
        },
        guests: [
            { id: 1, name: "Melinda Stanbery", status: "A" },
            { id: 2, name: "Luke Stanbery", status: "I" },
            { id: 3, name: "Erin Mugnaini", status: "I" },
            { id: 4, name: "Abe Marquez", status: "N" }
        ]
    },
    {
        id: 2,
        name: "Super Awesome Event",
        description:
            "This event is even COOLER than my event. It's my super awesome event. It's crazy awesome. Holy smokes!!",
        datetimeStart: "2019-09-01 09:00:00",
        datetimeEnd: "2019-10-01 11:00:00",
        address: {
            street: "555 Main St",
            city: "Lisle",
            state: "IL",
            zipcode: "60538"
        },
        guests: [
            { id: 3, name: "Erin Mugnaini", status: "A" },
            { id: 4, name: "Abe Marquez", status: "A" },
            { id: 5, name: "Adam Mugnaini", status: "A" },
            { id: 6, name: "Colin Hope", status: "A" }
        ]
    }
];

export default {
    getEvents() {
        const events = JSON.parse(localStorage.getItem("events"));
        if (typeof events == "undefined" || events == null) {
            localStorage.setItem("events", JSON.stringify(defaultEvents));
            return defaultEvents;
        } else {
            return events;
        }
    },

    postEvent(eventToAdd) {
        const events = JSON.parse(localStorage.getItem("events"));
        if (eventToAdd.id === 0) {
            eventToAdd.id = events.length + 1;
            localStorage.setItem(
                "events",
                JSON.stringify([...events, eventToAdd])
            );
        } else {
            events.forEach((event, i) => {
                if (event.id === eventToAdd.id) {
                    events[i] = eventToAdd;
                }
            });
        }
    }
};
