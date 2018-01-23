import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }

  updateUserInput(value){
    this.setState({userInput: value.toLowerCase()});
  }

  render() {
    let   filtered = this.props.characters.filter(c =>
        c.name.toLowerCase().includes(this.state.userInput.toLowerCase()));
    
    return (
      <div className="live-search">
        <SearchForm onUserInput={value => this.updateUserInput(value)}/>
        <CharacterCount count={filtered.length} />
        <CharacterList characters={ filtered } />
      </div>
    );
  }
}
