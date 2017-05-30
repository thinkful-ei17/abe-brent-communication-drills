import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default function LiveSearch(props) {
    return (
        <div className="live-search">
            <SearchForm />
            <CharacterList characters={props.characters} />
        </div>
    );
}
