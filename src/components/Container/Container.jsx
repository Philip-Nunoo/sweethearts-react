import React from 'react';

const Container = ({ children }) => (
    <div className="columns is-mobile is-centered">
        <div className="column is-three-fifths">
            {children}
        </div>
    </div>
);

export default Container;
