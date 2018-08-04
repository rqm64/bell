import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ModalWindow from './components/ModalWindow';
import CompanyUnit from './CompanyUnit';


class Main extends Component {
  render() {
    return (
        <main>
          <ModalWindow />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/company/:id' component={CompanyUnit}/>
          </Switch>          
   
        </main>
    );
  }
}

export default Main;