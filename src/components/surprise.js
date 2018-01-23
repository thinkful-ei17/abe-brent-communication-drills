import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleBtn(){
    console.log('Surprise!');
  }

  render() {
        // Show the button to start with
    return <SurpriseButton onBtnClick={() => this.toggleBtn()} />;
  }
}
