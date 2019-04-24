import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Result from 'pages/Result';
import Welcome from './pages/Welcome';

const Routes = () => ([
    <Route key="welcome" exact path="/" component={Welcome} />,
    <Route key="gender" path="/(female|male)/" component={Home}/>,
    <Route key="result" exact path="/results" component={Result}/>,
    <Route key="notFound" path="*" component={() => 'Not Found'}/>,
]);

export default Routes;
