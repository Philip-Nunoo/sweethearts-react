import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from 'utils/registerServiceWorker';

import Home from 'pages/Home';
import Result from 'pages/Result';

import "./index.sass";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Result} />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

