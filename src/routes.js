import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Result from 'pages/Result';

const Routes = () => ([
    <Route key="home" exact path="/" component={Home}/>,
    <Route key="result" exact path="/results" component={Result}/>
]);

export default Routes;
