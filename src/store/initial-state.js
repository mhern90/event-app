export default {
    events: [],
    currentEvent: {
        id: 0,
        name: "",
        datetimeStart: "",
        datetimeEnd: "",
        address: {
            street: "",
            city: "",
            state: "",
            zipcode: ""
        },
        description: "",
        guests: []
    },
    friends: [],
    loginCredentials: {
        isAuthorized: false,
        token: null
    }
};
