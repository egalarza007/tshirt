import React from 'react';
import { Switch,Route, BrowserRouter,Redirect } from 'react-router-dom'
import Home from './App.js';
import Detail from './detail';
import Search from './search';
import history from './history';
import About from './about';

export default() =>(
    <BrowserRouter history={ history }>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/detail/:id' exact component={Detail}/>
        <Route path='/search/:id' exact component={Search}/>
        <Redirect
    exact
    from="/search/:id"
    to="/search/:id"
    key="/search/:id"
  />
    </Switch>
  </BrowserRouter>);