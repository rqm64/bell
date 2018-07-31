import React, { Component } from 'react';
import { connect } from 'react-redux';


class ButtonAdd extends Component {
  render() {
      return (
        <button onClick={this.addComponent.bind(this)}>
            Добавить компанию
        </button>
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
