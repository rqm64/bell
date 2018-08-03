import React, { Component } from 'react';
import { connect } from 'react-redux';

import Company from './Company';
import LoginForm from './components/LoginForm';



class Home extends Component {
  render() {
    return (
        this.props.loginForm.isLogin ? <Company /> : <LoginForm />       
    );
  }
}

export default connect(
    state => ({
      loginForm: state.loginForm
    })
)(Home);
