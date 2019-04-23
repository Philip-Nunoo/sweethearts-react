import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Container from '../components/Container/Container';
import ListItem from '../components/ListItem/ListItem';

const Welcome = ({ literals }) => (
    !(literals && literals.welcome) ? 'loading' :
    <Container>
        <p>{literals.welcome.message}</p>
        <div className="columns is-desktop">
            <div className="column">
                <ListItem to="/female">
                    <img src={require('../images/select-woman.png')} alt="select-woman" />
                    <span>{literals.welcome.selectGirlfriend}</span>
                </ListItem>
            </div>
            <div className="column">
                <ListItem to="/male">
                    <img src={require('../images/select-man.png')} alt="select-man" />
                    <span>{literals.welcome.selectBoyfriend}</span>
                </ListItem>
            </div>
        </div>
    </Container>
);

Welcome.propTypes = {
    literals: PropTypes.shape({
        welcome: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }),
    }).isRequired,
};

const mapStateToProps = ({ literals }) => ({ literals });

export default connect(mapStateToProps)(Welcome);
