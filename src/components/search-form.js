import React from 'react';

export default function SearchForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input
                aria-controls="character-count"
                type="search"
                id="search"
                name="search"
                placeholder="Dale Cooper"
            />
        </form>
    );
}
