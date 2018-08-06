import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../node_modules/react-bootstrap/lib/Button';


class ButtonAdd extends Component {
  render() {
      return (
        <Button bsStyle="success" onClick={this.addComponent.bind(this)}>
            Добавить компанию
        </Button>
      );
  }

  addComponent() {
      this.props.action(this.props.buttonType, null);
  }

}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        action: (modalType, id) => {
            dispatch({ type: 'MODAL_OPEN', modalType: modalType, id: id});
        }
    })
  )(ButtonAdd);;
