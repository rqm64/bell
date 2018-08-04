import React, { Component } from 'react';

import ModalWindow from './components/ModalWindow';

class Main extends Component {
  render() {
    return (
        <main>
          <ModalWindow />
          {this.props.content}
        </main>
    );
  }
}

export default Main;