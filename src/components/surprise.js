import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideImage: true
    };
  }

  toggleBtn(){
    this.setState({hideImage: false});
    console.log('Surprise!');
  }

  render() {
        // Show the button to start with
    if(this.state.hideImage){
      return <SurpriseButton  onBtnClick={() => this.toggleBtn()} />; 
    } else {
      return (
      <SurpriseImage />
    );
    }
  }
}
