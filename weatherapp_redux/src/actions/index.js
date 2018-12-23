import transformForecast from './../services/transformForecast';


export const SET_CITY= 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';

export const setCity = value => ({type:SET_CITY,value}); 

const setForeCastData = payload => ({type:SET_FORECAST_DATA, payload});

const url = "http://api.openweathermap.org/data/2.5/forecast"
const api_key="7b59ec2c44ef9afe0840c69fa0a7bd5b";

// hace falta incorporar el middleware
export const setSelectedCity= payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;


        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data=> {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el esado con el resultado de la promise (fetch)
                dispatch(setForeCastData({city: payload, forecastData}));
            }
        );
    };
};