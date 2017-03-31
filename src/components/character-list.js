import React from 'react';

export default function CharacterList(props) {
    const characters = props.characters.map(character =>
        <li>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}</li>
    );
    return (
        <ul className="character-list">
            {characters}
        </ul>
    );
}
