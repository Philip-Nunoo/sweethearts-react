import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from 'utils/registerServiceWorker';

import Home from 'pages/Home/Home';
import Result from 'pages/Result';
import Header from './components/Header/Header';

import "./index.sass";

const App = () => (
    <Router>
        <Header />
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Result} />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

