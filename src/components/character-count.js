import React from 'react';

export default function CharacterCount(props) {
    return (
    <span
        aria-live="assertive"
        aria-atomic="true"
        id="character-count"
        className="character-count"
        role="status"
    >
        {props.count} characters
    </span>
  );
}
