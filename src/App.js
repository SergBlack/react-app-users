import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Users from './pages/Users/Users';
import UserShow from './pages/UserShow';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Users} />
          <Route path={'/user/:id'} exact component={UserShow} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
