import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ShareLink from 'react-facebook-share-link';
import Container from '../components/Container/Container';

import './styles.sass';

const Result = ({ literals, location }) => (
    !location && !location.state && !location.state.detail ?
    <Redirect to="/" />  :
    <Container>
        <div className="text-center">
            <h2>
                {literals.result && literals.result.male}
                <span className="result"><CountUp end={70} /></span>
                camels
            </h2>
            <p>
                <ShareLink link={`${process.env.PUBLIC_URL}`}>
                    {link => (
                        <a
                            href={link}
                            target='_blank'
                            className="button is-warning is-medium"
                            style={{ color: '#FFF', backgroundColor: '#305C98' }}
                            rel='noopener noreferrer'
                        >
                            Share this on Facebook
                        </a>
                    )}
                </ShareLink>
            </p>

            <Link to="/" className="button is-warning is-medium">Calculate again</Link>
        </div>
    </Container>
);

Result.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({}).isRequired
    }).isRequired
};

Result.defaultProps = {
    literals: { result: { male: 'loading...'}}
};

const mapStateToProps = ({ literals = { result: { male: 'boy'}} }) => ({ literals });

export default connect(mapStateToProps)(Result);