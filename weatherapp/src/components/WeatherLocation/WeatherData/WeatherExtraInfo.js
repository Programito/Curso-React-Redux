import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const WeatherExtraInfo = ({humidity,wind}) => (
    <div className='weatherExtaCont'>
        <span className='extraInfoText'>{`Humedad: ${humidity} %`}</span>
        <span className='extraInfoText'>{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.protoTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}


export default WeatherExtraInfo;