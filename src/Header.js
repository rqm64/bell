import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

class Header extends Component {
  render() {
    return (
      <header>
        <LoginForm />        
      </header>
    );
  }
}

export default Header;