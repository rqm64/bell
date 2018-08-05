import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main'
import LoginForm from './components/LoginForm';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.loginForm.isLogin ? <Main content={this.props.children}/> : <LoginForm />}
      </div>
    );
  }
}


export default connect(
  state => ({    
    loginForm: state.loginForm
  })
)(App);
