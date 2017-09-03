import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Paths } from '../constants';
import AuthRoute from '../containers/AuthRoute';

import Home from './Home';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';

const routes = (
  <Switch>
    <Route exact path={Paths.HOME} component={Home} />
    <Route path={Paths.LOGIN} component={Login} />
    <Route path={Paths.REGISTER} component={Register} />
    <AuthRoute path={Paths.ADMIN} component={Admin} />
    <Route component={PageNotFound} />
  </Switch>
);

export default routes;
