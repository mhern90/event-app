import React, { Component } from "react";
import FieldTip from "./FieldTip";
import "../css/input.css";

class SelectField extends Component {
    onInputChange = e => {
        const { handleInputChange, clearFormError } = this.props;
        handleInputChange(e);
        clearFormError(e);
    };

    render() {
        const {
            name,
            defaultOptionValue,
            defaultOptionText,
            options,
            defaultValue,
            required,
            error
        } = this.props;

        return (
            <div className="select-field-container p-2 pb-4">
                <div className="select-field">
                    <select
                        value={defaultValue}
                        className={error ? "w-full error" : "w-full"}
                        name={name}
                        onChange={e => this.onInputChange(e)}
                    >
                        {defaultOptionText.length && (
                            <option value={defaultOptionValue}>
                                {defaultOptionText}
                            </option>
                        )}
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                    <FieldTip error={error} required={required} />
                </div>
            </div>
        );
    }
}

export default SelectField;
