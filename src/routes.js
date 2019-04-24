import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Result from 'pages/Result';
import Welcome from './pages/Welcome';

const Routes = () => (
    <Switch>
        <Route key="welcome" exact path="/" component={Welcome} />,
        <Route key="gender" path="/(female|male)/" component={Home}/>,
        <Route key="result" exact path="/results" component={Result}/>,
        <Route key="notFound" component={() => 'Not Found'}/>,
    </Switch>
);

export default Routes;
