import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {  

  loginCheck() {
    const {isLogin, loginName} = this.props.loginForm;
    let logConstructor;
    if (isLogin){
      logConstructor = 
        <div>
          Вы зашли как, {loginName} 
          <button  onClick={this.logOutClick.bind(this)}>Выйти</button>
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
        {this.loginCheck()}        
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
