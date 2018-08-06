import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../node_modules/react-bootstrap/lib/Button';
import Well from '../../node_modules/react-bootstrap/lib/Well';


class LoginForm extends Component {  

  checkLogin() {
    const {isLogin, loginName} = this.props.loginForm;
    let logConstructor;
    if (isLogin){
      logConstructor = 
        <div className='float-right'>
          Вы зашли как, {loginName} 
          <Button bsSize="small" bsStyle="secondary" onClick={this.logOutClick.bind(this)}>Выйти</Button>
        </div>;
    } else {
      logConstructor =        
        <div>
        <input type='text'
               placeholder='Введите логин'
               ref={(input) => { this.loginTextInput = input }} />
        <button onClick={this.logInClick.bind(this)}>Войти</button>
      </div>;        
    }
    return logConstructor;   
  }

  logInClick() {
    if (this.loginTextInput.value !== '') {
      this.props.logIn(this.loginTextInput.value);
    }
  }

  logOutClick() {
    this.props.logOut();
  }

  render() {
    return (
      <form>
        {this.checkLogin()}        
      </form>
    );
  }
  
}

export default connect(
    state => ({
      loginForm: state.loginForm
    }),
    dispatch => ({
      logIn: (loginTextInput) => {
        dispatch({ type: 'LOG_IN', logName: loginTextInput});
      },
      logOut: () => {
        dispatch({ type: 'LOG_OUT'})
      }
    })
)(LoginForm);
