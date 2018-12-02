import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW , WINDY} from './../../../constants/weathers';
import './style.css';


const stateIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case SNOW:
            return "snow";
        case RAIN:
            return "rain";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateIconName(weatherState)} size="4x" />);
}


const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature} `}</span>
        <span className='temperaturetype'>Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};


export default WeatherTemperature;