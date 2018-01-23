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

  filterCharacters(value) {
    console.log('filterCharacters called');
    console.log(this.state.foundCharacters);
    if(value == '' ){
      console.log('the input was blank... reset foundCharacters');
      console.log(this.props.characters);
      this.setState({foundCharacters: this.props.characters});
    } else {

      console.log('input given... filtering list!');
      console.log('searching for', value);
      const filtered = this.state.foundCharacters.filter(c =>
      c.name.toLowerCase().includes(value)
    );

      this.setState({foundCharacters: filtered});
    }
  }

  updateUserInput(value){
    console.log('updateUserInput called');
    console.log(value.toLowerCase());
    this.setState({userInput: value.toLowerCase()}, this.filterCharacters(value.toLowerCase()));
  }

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
