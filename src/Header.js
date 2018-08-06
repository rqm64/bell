import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.png';
import LoginForm from './components/LoginForm';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Row from '../node_modules/react-bootstrap/lib/Row';

class Header extends Component {
  render() {
    return (
      <Row className='align-items-center'>
        <Col sm={9} md={9} lg={9}>
          <img src={logo} width='100' />
        </Col>
        <Col sm={3} md={3} lg={3}>           
            {this.props.loginForm.isLogin ? <LoginForm /> : ''}
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => ({
    loginForm: state.loginForm
  })
)(Header);