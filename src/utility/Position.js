import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'

class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationCity: '',
            locationCountry: '',
            locationStAdress: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(position => {
            const location = console.log(position);
            fetch('https://geocode.xyz/' + position.coords.latitude + ',' + position.coords.longitude + '?json=1')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        locationCity: responseJson.city,
                        locationCountry: responseJson.country,
                        locationStAdress: responseJson.staddress,
                        isLoading: false
                    });
                });
        });
    }

    componentWillUpdate() {
        this.props.saveCityData(this.state.locationCity)
        this.props.saveCountryData(this.state.locationCountry)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        } else {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Text style={this.props.style}>{this.props.cityData}{' '}</Text>
                    <Text style={this.props.style}>{this.state.locationStAdress}</Text>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        cityData: state.city,
        countryData: state.country,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        saveCityData: (data) => dispatch({ type: 'SaveCityData', CityData: data }),
        saveCountryData: (data) => dispatch({ type: 'SaveCountryData', CountryData: data }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Position)