import React from 'react';

export default function Output(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <output id={props.id} aria-live="polite">
                ${props.value}
            </output>
        </div>
    );
}

Output.defaultProps = {
    value: 0
};

