/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '../Container/Container';
import { loadLiterals } from '../../store/literals';
import loadLang from '../../i18n';

import './style.sass';

const Header = ({ literals, ...props }) => {
    const changeLanguage = lang => (
        loadLang(lang).then(val => props.updateLanguage(val))
    );

    return (
        <header>
            {console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)}
            <Container>
                <Link to="/" className="logo">
                    <img src={require('../../images/camel-logo-2.png')} alt="logo" />
                </Link>
                <h1>{literals.result && literals.header.title}</h1>
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

const mapStateToProps = ({ literals = { result: { male: 'boy'}} }) => ({ literals });
const mapDispatchToProps = {
    updateLanguage: loadLiterals
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
