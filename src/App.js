// App.js

import React from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import Registration from './Components/Registration';
import login from './Components/login';
import SecuredPage from './Components/SecuredPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={login} />
          <Route path="/secured" component={SecuredPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
