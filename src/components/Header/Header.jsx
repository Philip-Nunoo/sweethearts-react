import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import { connect } from 'react-redux';
import { loadLiterals } from '../../store/literals';
import loadLang from '../../i18n';

import './style.sass';

const Header = props => {
    const changeLanguage = lang => (
        loadLang(lang).then(val => props.updateLanguage(val))
    );

    return (
        <header>
            <Container>
                <a href="/" className="logo">
                    <img src={require('../../images/camel-logo-2.png')} alt="logo" />
                </a>
                <h1>Camel Calculator</h1>
                <div className="lang-select">
                    <a
                        className="is-link"
                        onClick={() => changeLanguage('en')}
                    >
                        <img src={require('../../images/flag-en.png')} alt="flag-en" width={32}/>
                    </a>
                    <a
                        className="is-link"
                        onClick={() => changeLanguage('de')}
                    >
                        <img src={require('../../images/flag-de.png')} alt="flag-en" width={32}/>
                    </a>
                    <a
                        className="is-link"
                        onClick={() => changeLanguage('es')}
                    >
                        <img src={require('../../images/flag-es.png')} alt="flag-en" width={32}/>
                    </a>
                </div>
            </Container>
        </header>
    );
}

Header.propTypes = {
    updateLanguage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    updateLanguage: loadLiterals
};

export default connect(null, mapDispatchToProps)(Header);
