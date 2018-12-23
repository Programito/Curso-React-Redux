import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
      }

    render() {
        return (
            <LocationList cities={this.props.cities}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
  }
  
  const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
  });
  
  // componente con la habiliad de la conexion
  // funcion ( , accion()) devuelve una funcion
  export default connect(null,mapDispatchToProps)(LocationListContainer);