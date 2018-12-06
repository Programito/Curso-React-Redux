import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from './../../services/transformWeather';
import './style.css';



const url = "http://api.openweathermap.org/data/2.5/weather"
const api_key="7b59ec2c44ef9afe0840c69fa0a7bd5b";
//const city="Buenos Aires,ar";
//const api_weather= `${url}?q=${city}&APPID=${api_key}`;



class WeatherLocation extends Component {

    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        };
    } 

  
    handleUpdateClick = () => {
        const {city} = this.state;
        const api_weather= `${url}?q=${city}&APPID=${api_key}`;
        fetch(api_weather).then(data=>{
            //console.log(api_weather);
            //console.log(data);
            return data.json();
        }).then(weather_data => {
            //console.log(weather_data);
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }

    
    render = () => {
        const {city,data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city} />
            {data ? <WeatherData data={data} /> :
                <CircularProgress size={60} thickness={7} />}
        </div>);
    };
}

WeatherLocation.propTypes= {
    city:PropTypes.string,
}

export default WeatherLocation;