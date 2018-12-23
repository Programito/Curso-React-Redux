import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './style.css';

/*const days= [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data= {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
};
*/


const url = "http://api.openweathermap.org/data/2.5/forecast"
const api_key="7b59ec2c44ef9afe0840c69fa0a7bd5b";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state= {forecastData: null}
    }

    componentDidMount(){
         // fetch o axios 
         this.updateCity(this.props.city);
    }

    // cuando se modifica las propiedades excepto la primera vez
    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }
    
       
    updateCity= city=>{
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data=> {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => 
                <ForecastItem
                            key={`${forecast.weekDay}${forecast.hour}`} 
                            weekDay={forecast.weekDay}
                            hour={forecast.hour}
                            data={forecast.data}>
                </ForecastItem>)
    }

    renderProress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                {forecastData ? 
                    this.renderForecastItemDays(forecastData) :
                    this.renderProress()}
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
