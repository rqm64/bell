import React, { Component } from 'react';

import ModalWindow from './components/ModalWindow';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Row from '../node_modules/react-bootstrap/lib/Row';


class Main extends Component {
  render() {
    return (
        <Row>
            <ModalWindow />
            {this.props.content}
        </Row>
    );
  }
}

export default Main;