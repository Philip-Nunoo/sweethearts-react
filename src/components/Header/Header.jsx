import React from 'react';

import Container from '../Container/Container';
import './style.sass';

const Header = () => (
    <header>
        <Container>
            <a href="/" className="logo">
                <img src={require('../../images/camel-logo-2.png')} alt="logo" />
            </a>
            <h1>Camel Calculator</h1>
        </Container>
    </header>
);

export default Header;
