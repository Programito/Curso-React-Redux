import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities= [
          'Buenos Aires,ar',
          'Tokyo,JP',
          'Barcelona,es',
          'London,GB',
          'Washington DC.,US' 
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
