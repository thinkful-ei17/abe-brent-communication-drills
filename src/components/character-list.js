import React from 'react';

export default function CharacterList(props) {
    const characters = props.characters.map((character, index) =>
        <li key={index}>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}</li>
    );
    return (
        <ul className="character-list" aria-live="polite">
            {characters}
        </ul>
    );
}
