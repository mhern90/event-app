import React, { Component } from "react";
import moment from "moment";
import "../css/input.css";

import FieldTip from "./FieldTip";

class DateTimeField extends Component {
    state = {
        date: "",
        time: ""
    };

    componentDidMount() {
        const { defaultValue } = this.props;
        let date = "",
            time = "";
        if (defaultValue !== "") {
            date = this.getDefaultDate(defaultValue);
            time = this.getDefaultTime(defaultValue);
            this.setState({ date, time });
        } else {
            this.setState({ date, time });
        }
    }

    handleChange = e => {
        const fieldName = e.target.name.toLowerCase();
        let value = e.target.value;

        if (fieldName.includes("date")) {
            this.setState({ date: value }, this.updateDateTime);
        } else {
            this.setState({ time: value }, this.updateDateTime);
        }
    };

    updateDateTime = () => {
        const { date, time } = this.state;
        let datetimeField = { name: this.props.fieldGroup, value: "" };
        if (date != "" && date != null && (time != "" && time != null)) {
            datetimeField.value = date + " " + time + ":00";
            this.props.setDateTime(datetimeField);
        }
    };

    getDefaultDate = defaultValue => {
        const datetime = moment(defaultValue);
        return datetime.format("YYYY-MM-DD");
    };

    getDefaultTime = defaultValue => {
        const datetime = moment(defaultValue);
        return datetime.format("HH:mm");
    };

    render() {
        const {
            width,
            name,
            dateLabel,
            timeLabel,
            dateError,
            timeError,
            required,
            clearFormError
        } = this.props;

        const { date, time } = this.state;

        return (
            <div className="flex">
                <div className={width + " p-2 pb-4"}>
                    <label className="block" htmlFor={name + "Date"}>
                        {dateLabel}
                    </label>
                    <input
                        className={dateError ? "w-full error" : "w-full"}
                        name={name + "Date"}
                        value={date}
                        type="date"
                        onFocus={e => clearFormError(e)}
                        onChange={e => this.handleChange(e)}
                    />
                    <FieldTip error={dateError} required={required} />
                </div>
                <div className={width + " p-2 pb-4"}>
                    <label className="block" htmlFor={name + "Time"}>
                        {timeLabel}
                    </label>
                    <input
                        className={timeError ? "w-full error" : "w-full"}
                        name={name + "Time"}
                        value={time}
                        type="time"
                        onFocus={e => clearFormError(e)}
                        onChange={e => this.handleChange(e)}
                    />
                    <FieldTip error={timeError} required={required} />
                </div>
            </div>
        );
    }
}

export default DateTimeField;
