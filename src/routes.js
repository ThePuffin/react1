import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './components/Home';
import History from './components/History';

const Routes = () => (<div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch></div>);

export default Routes;