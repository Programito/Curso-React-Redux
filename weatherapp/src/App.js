import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtented from './components/ForecastExtented';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Tokyo,JP',
  'Barcelona,es',
  'London,GB',
  'Washington DC.,US'
];

class App extends Component {

  constructor(){
    super();

    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const {city} = this.state;
    return (

      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} >
              <AppBar title="WeatherApp"></AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    // si city es null renderiza forecastexented
                    city && 
                        <ForecastExtented city={city}></ForecastExtented>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
