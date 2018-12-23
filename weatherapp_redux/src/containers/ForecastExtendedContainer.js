import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtented';


class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && 
           <ForecastExtended city={this.props.city}></ForecastExtended>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

//(state)=>(city:state.city)
const mapStateToProps = ({city}) => ({city});
export default connect(mapStateToProps,null)(ForecastExtendedContainer);