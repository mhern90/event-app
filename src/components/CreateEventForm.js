import React, { Component } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import AutocompleteInput from "./AutocompleteInput";
import DateTimeField from "./DateTimeField";

import { formRegex, states } from "../helpers";

class CreateEventForm extends Component {
    state = {
        formErrors: {
            name: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            datetimeStart: "",
            datetimeEnd: "",
            guests: ""
        }
    };

    clearFormError = e => {
        let name = e.target.name;
        const { formErrors } = this.state;
        if (name.includes("start")) {
            formErrors.datetimeStart = "";
        } else if (name.includes("end")) {
            formErrors.datetimeEnd = "";
        } else {
            formErrors[name] = "";
        }

        this.setState({ formErrors });
    };

    handleInputChange = e => {
        const field = { name: e.target.name, value: e.target.value };
        this.props.onFieldChange(field);
    };

    handleSubmit = e => {
        const { event, saveEvent, resetCurrentEvent } = this.props;
        let { formErrors } = this.state;
        e.preventDefault();

        if (this.validateEventForm(event)) {
            Object.keys(formErrors).forEach(v => (formErrors[v] = ""));
            this.setState({ formErrors });
            saveEvent();
            resetCurrentEvent();
        }
    };

    validateEventForm = event => {
        let valid = true,
            formErrors = {
                name: "",
                street: "",
                city: "",
                state: "",
                zipcode: "",
                datetimeStart: "",
                datetimeEnd: "",
                guests: ""
            };

        const { city, zipcode } = this.props.event.address;

        if (!city.match(formRegex.alpha)) {
            formErrors.city = "Invalid city";
            valid = false;
        }

        if (!zipcode.match(formRegex.zip)) {
            formErrors.zipcode = "Invalid zipcode";
            valid = false;
        }

        for (const fieldName in event) {
            if (fieldName === "address") {
                for (const key in event.address) {
                    if (
                        event.address[key] === "" ||
                        event.address[key].length === 0
                    ) {
                        formErrors[key] = "Required";
                        valid = false;
                    }
                }
            } else if (
                event[fieldName] === "" ||
                event[fieldName].length === 0
            ) {
                formErrors[fieldName] = "Required";
                valid = false;
            }
        }

        this.setState({ formErrors });
        return valid;
    };

    render() {
        let {
            id,
            name,
            address,
            datetimeStart,
            datetimeEnd,
            description
        } = this.props.event;

        const { friends, addGuestToEvent, removeGuestFromEvent } = this.props;
        const { formErrors } = this.state;

        return (
            <div className="event-form clearfix pb-4">
                <form id={id} onSubmit={e => this.handleSubmit(e)}>
                    <div className="flex">
                        <div className="w-full">
                            <InputField
                                name="name"
                                type="text"
                                defaultValue={name}
                                labelText="Name"
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                required={true}
                                error={formErrors.name}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <InputField
                                name="street"
                                type="text"
                                defaultValue={address.street}
                                labelText="Street"
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                required={true}
                                error={formErrors.street}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <InputField
                                name="city"
                                type="text"
                                defaultValue={address.city}
                                labelText="City"
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                required={true}
                                error={formErrors.city}
                            />
                        </div>
                        <div className="w-1/6">
                            <SelectField
                                name="state"
                                type="text"
                                defaultOptionValue=""
                                defaultOptionText="State"
                                defaultValue={address.state}
                                labelText="State"
                                options={states}
                                required={true}
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                error={formErrors.state}
                            />
                        </div>
                        <div className="w-1/3">
                            <InputField
                                name="zipcode"
                                type="number"
                                defaultValue={address.zipcode}
                                labelText="Zip Code"
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                required={true}
                                error={formErrors.zipcode}
                            />
                        </div>
                    </div>
                    <DateTimeField
                        width="w-1/2"
                        name="start"
                        fieldGroup="datetimeStart"
                        key={"start" + id}
                        defaultValue={datetimeStart}
                        dateLabel="Event Start Date"
                        timeLabel="Event Start Time"
                        required={true}
                        clearFormError={this.clearFormError}
                        dateError={formErrors.datetimeStart}
                        timeError={formErrors.datetimeStart}
                        setDateTime={this.props.onFieldChange}
                    />
                    <DateTimeField
                        width="w-1/2"
                        name="end"
                        fieldGroup="datetimeEnd"
                        key={"end" + id}
                        defaultValue={datetimeEnd}
                        dateLabel="Event End Date"
                        timeLabel="Event End Time"
                        required={true}
                        clearFormError={this.clearFormError}
                        dateError={formErrors.datetimeEnd}
                        timeError={formErrors.datetimeEnd}
                        setDateTime={this.props.onFieldChange}
                    />
                    <div className="flex">
                        <div className="w-full">
                            <TextareaField
                                name="description"
                                defaultValue={description}
                                labelText="Event Description"
                                handleInputChange={this.handleInputChange}
                                clearFormError={this.clearFormError}
                                error={formErrors.description}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <AutocompleteInput
                                addedItemsLabel="Invited Guests:"
                                placeholder="Add Guest"
                                name="guests"
                                allowDuplicates={false}
                                autocompleteItems={friends}
                                addItem={addGuestToEvent}
                                removeItem={removeGuestFromEvent}
                                required={true}
                                clearFormError={this.clearFormError}
                                error={formErrors.guests}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-auto px-2 pt-4">
                        <input
                            className="rounded bg-purple-darker text-white px-4 py-2 float-none md:float-right w-full md:w-auto"
                            type="submit"
                            value="Save"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateEventForm;
