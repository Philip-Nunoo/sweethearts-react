import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import registerServiceWorker from 'utils/registerServiceWorker';

import Header from './components/Header/Header';
import { loadLiterals } from "store/literals";
import store from "./store";
import loadLang from './i18n';
import Routes from './routes';

import "./index.sass";

loadLang().then(lang => store.dispatch(loadLiterals(lang)));

const App = props => (
    <Router basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Header />
            <Routes {...props}/>
        </Provider>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

