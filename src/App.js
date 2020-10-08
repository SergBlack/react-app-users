import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Users from './pages/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
