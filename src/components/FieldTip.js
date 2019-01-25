import React from "react";

const FieldTip = ({ error, required }) => {
    if (error != "" && typeof error != "undefined") {
        return <div className="field-tip pl-4 text-xs text-red">{error}</div>;
    } else if (required) {
        return (
            <div className="field-tip pl-4 text-xs text-grey-dark">
                Required
            </div>
        );
    } else {
        return <div className="field-tip pl-4 text-xs" />;
    }
};

export default FieldTip;
