import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundCharacters: this.props.characters,
      userInput: '',
    };
  }

  filterCharacters() {
    console.log('filterCharacters called');
    console.log(this.state.foundCharacters);

    if(this.state.userInput === '' ){
      console.log('the input was blank... reset foundCharacters');
      console.log(this.props.characters);
      this.setState({foundCharacters: this.props.characters});
    }

    console.log('input given... filtering list!');
    const filtered = this.state.foundCharacters.filter(c =>
      c.name.toLowerCase().includes(this.userInput)
    );

    this.setState({foundCharacters: filtered});
  }

  updateUserInput(value){
    console.log('updateUserInput called');
    // console.log(value);
    this.setState({userInput: value.toLowerCase()});
    this.filterCharacters();
  }

  /*
  1. create an onUpdate method which will give us the last letter typed
  2. list of letters that typed 
  3. filter characters where 
  4.
  // Maybe use this: peaks.filter(c => c.name.toLowerCase().includes('mi')) and toLowerCase input field as well
  */

  render() {
    return (
      <div className="live-search">
        <SearchForm onUserInput={value => this.updateUserInput(value)}/>
        <CharacterCount count={this.props.characters.length} />
        <CharacterList characters={this.state.foundCharacters} />
      </div>
    );
  }
}
