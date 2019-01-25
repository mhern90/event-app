import React, { Component } from "react";
import FieldTip from "./FieldTip";
import "../css/input.css";
import "../css/autocomplete.css";

/* 
Props:
    - name: hidden input field name
    - autocompleteItems: an array of objects items to select from. 
        Each object must have an id and name
        
*/

class AutocompleteInput extends Component {
    state = {
        listItems: [],
        dropdownItems: [],
        currentListItem: "",
        isAutocompleting: false
    };

    handleListItemInputChange = e => {
        const value = e.target.value,
            listItems = this.state.listItems,
            regex = new RegExp(value, "gi");

        let dropdownItems = this.props.autocompleteItems.filter(item => {
            if (item.name.match(regex) != null) {
                return item;
            }
        });

        dropdownItems = dropdownItems.filter(item => {
            if (listItems.indexOf(item) < 0) {
                return item;
            }
        });

        if (dropdownItems.length > 0) {
            this.setState({
                currentListItem: value,
                dropdownItems,
                isAutocompleting: true
            });
        } else {
            this.setState({
                currentListItem: value,
                isAutocompleting: false
            });
        }
    };

    handleListItemBlur = () => {
        this.setState({
            isAutocompleting: false
        });
    };

    updateListItems = item => {
        const listItems = this.state.listItems;

        if (listItems.indexOf(item) < 0) {
            listItems.push(item);

            this.setState({
                listItems,
                currentListItem: "",
                isAutocompleting: false
            });

            this.props.addItem(item);
        }
    };

    removeListItem = itemToRemove => {
        let listItems = this.state.listItems;

        listItems = listItems.filter(item => item.id != itemToRemove.id);

        this.setState({ listItems });
        this.props.removeItem(itemToRemove);
    };

    render() {
        const {
            name,
            placeholder,
            addedItemsLabel,
            error,
            required,
            clearFormError
        } = this.props;
        const {
            listItems,
            currentListItem,
            isAutocompleting,
            dropdownItems
        } = this.state;

        return (
            <div className="autocomplete-field clearfix p-2 pb-4 w-full">
                <div id="addedItems" className="block pb-2">
                    <div>{addedItemsLabel}</div>
                    <ul className="autocomplete-list w-full p-2">
                        {listItems.length == 0 ? (
                            <li className="text-sm">None</li>
                        ) : (
                            listItems.map(item => (
                                <li
                                    className="text-sm rounded bg-grey-light px-2 py-1 mr-2"
                                    key={item.id}
                                >
                                    <span className="pr-1">{item.name}</span>
                                    <button
                                        onClick={() =>
                                            this.removeListItem(item)
                                        }
                                    >
                                        x
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <input
                    name={name}
                    placeholder={placeholder}
                    value={currentListItem}
                    onFocus={e => clearFormError(e)}
                    onBlur={this.handleListItemBlur}
                    onChange={e => this.handleListItemInputChange(e)}
                    type="text"
                    className={
                        "autocomplete-input " +
                        (error ? "w-full error" : "w-full")
                    }
                />
                <FieldTip error={error} required={required} />
                <ul
                    className={
                        isAutocompleting
                            ? "autocomplete-dropdown w-auto"
                            : "autocomplete-dropdown w-auto hidden"
                    }
                >
                    {dropdownItems.map(item => (
                        <li
                            className="dropdown-item p-2"
                            onMouseDown={() => this.updateListItems(item)}
                            key={item.id}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AutocompleteInput;
