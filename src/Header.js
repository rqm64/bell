import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';

class Header extends Component {
  render() {
    return (
      <header>
        {this.props.loginForm.isLogin ? <LoginForm /> : ''}    
      </header>
    );
  }
}

export default connect(
  state => ({
    loginForm: state.loginForm
  })
)(Header);