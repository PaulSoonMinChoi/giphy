import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import DashBoard from './components/pages/DashBoard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={DashBoard}></Route>
            <Route path='/home' component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
