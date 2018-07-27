import React, { Component } from 'react';

import Company from './Company';
import ModalWindow from './components/ModalWindow';

class Main extends Component {
  render() {
    return (
        <main>
          <ModalWindow />          
          <Company />        
        </main>
    );
  }
}

export default Main;