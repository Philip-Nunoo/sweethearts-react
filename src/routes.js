import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Result from 'pages/Result';
import Welcome from './pages/Welcome';

const Routes = () => ([
    <Route key="welcome" exact path="/" component={Welcome} />,
    <Route key="home" exact path="/home" component={Home}/>,
    <Route key="result" exact path="/results" component={Result}/>,
]);

export default Routes;
