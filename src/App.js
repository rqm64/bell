import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '../node_modules/react-bootstrap/lib/Grid';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';


import Header from './Header';
import Main from './Main'
import LoginForm from './components/LoginForm';


class App extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Header />
            {this.props.loginForm.isLogin ? <Main content={this.props.children}/> : <LoginForm />}
        </Grid>
      </div>
    );
  }
}


export default connect(
  state => ({    
    loginForm: state.loginForm
  })
)(App);
