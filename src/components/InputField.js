import React, { Component } from "react";
import FieldTip from "./FieldTip";
import "../css/input.css";

class InputField extends Component {
    state = {
        focus: false
    };

    onInputFocus = e => {
        this.setState({ focus: true });
        this.props.clearFormError(e);
    };

    onInputBlur = () => {
        this.setState({ focus: false });
    };

    render() {
        const { focus } = this.state;
        const {
            name,
            type,
            defaultValue,
            labelText,
            error,
            required,
            handleInputChange
        } = this.props;
        let labelClass = "label";

        if (focus || defaultValue !== "") {
            labelClass = "label shrink";
        }

        return (
            <div className="input-field-container p-2 pb-4">
                <div className="input-field">
                    <input
                        onChange={e => handleInputChange(e)}
                        onFocus={e => this.onInputFocus(e)}
                        onBlur={this.onInputBlur}
                        type={type}
                        name={name}
                        value={defaultValue}
                        className={
                            focus
                                ? "w-full active"
                                : error
                                ? "w-full error"
                                : "w-full"
                        }
                    />
                    <label htmlFor="name" className={labelClass}>
                        {labelText}
                    </label>
                    <FieldTip error={error} required={required} />
                </div>
            </div>
        );
    }
}

export default InputField;
