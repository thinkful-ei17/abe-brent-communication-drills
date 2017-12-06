import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default function LiveSearch(props) {
    return (
        <div className="live-search">
            <SearchForm />
            <CharacterCount count={props.characters.length} />
            <CharacterList characters={props.characters} />
        </div>
    );
}
