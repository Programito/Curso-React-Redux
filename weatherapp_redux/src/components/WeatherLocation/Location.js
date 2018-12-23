import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Location = ({city}) =>( 

    // destructuring
        <div className="LocationCont">
            <h1>
                {city}
            </h1>
        </div>
);

Location.protoTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;