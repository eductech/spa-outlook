import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';

import Callback from './Utils/Callback/Callback';
import Auth from './Utils/Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Switch history={history}>
        <Route exact path='/' render={(props) => <Home auth={auth} {...props} />}/>
        <Route path='/dashboard' render={(props) => <Dashboard auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
        }}/>
      </Switch>
    );
  }
}

export default App;
