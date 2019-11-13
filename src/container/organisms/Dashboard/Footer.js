import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Geolocation from '@react-native-community/geolocation';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationCity: '',
            isLoading: true,
            time: ''
        };
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000)

        Geolocation.getCurrentPosition(position => {
            const location = console.log(position);
            fetch('https://geocode.xyz/' + position.coords.latitude + ',' + position.coords.longitude + '?json=1')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        locationCity: responseJson.city,
                        isLoading: false
                    }, function () {
                    });
                });
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>{this.state.locationCity}</Text>
                    <Text>{this.state.time}</Text>
                </View>
            )
        }
    }

    componentWillUnmount() {
        clearInterval(() => {
            this.state.time
        });
    }

}
