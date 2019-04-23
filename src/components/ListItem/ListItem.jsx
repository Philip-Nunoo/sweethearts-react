import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.sass';

const ListItem = ({ to, children }) => (
    <Link to={to} className="list-group-item">
        {children}
    </Link>
);

ListItem.propTypes = {
    to: PropTypes.string.isRequired,
};

export default ListItem;
