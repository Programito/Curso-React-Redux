import React, { Component } from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";
//import {CLOUD, CLOUDY, SUN, RAIN, SNOW , WINDY} from './../../constants/weathers';
import { SUN } from './../../constants/weathers';
import './style.css';

const location="Buenos Aires,ar";
const api_key="7b59ec2c44ef9afe0840c69fa0a7bd5b";
const api_weather= `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;


const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city:'Barcelona',
            data: data1
        };
    } 

    getWeatherState = weather => {
        return SUN;
    }

    getData= (weather_data) => {
        const {humidity,temp} = weather_data.main;
        const {speed}= weather_data.wind;
        const weatherState = this.getWeatherState(this.weather); 

        const data = {
            humidity, 
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(data=>{
            //console.log(api_weather);
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = this.getData(weather_data);
            this.setState({data});
        });
        /*this.setState({
            city: 'Bilbao',
            data: data2
        });*/
        console.log('actualizado');
    }

    render = () => (
        <div className="weatherLocationCont">
            <Location city={this.state.city} />
            <WeatherData data={this.state.data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    );
}
export default WeatherLocation;