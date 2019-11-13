import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Logo from './../../../components/molecules/Login/Logo';
import Geolocation from '@react-native-community/geolocation';

export default class Upper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationState: '',
      long: '',
      lat: '',
    };
  }

  componentWillMount() {
    Geolocation.getCurrentPosition(position => {
      const location = console.log(position);
      this.setState({
        long: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        this.state.lat +
        ',' +
        this.state.long +
        '&key=' +
        'AIzaSyCgry2Jb9dDSfvg23g8wt1F4uMasV3-9c4',
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
      });
  }

  render() {
    return (
      <View style={styles.upper}>
        <Logo />
        <Text>{this.state.long}</Text>
        <Text>{this.state.lat}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  upper: {
    flex: 2,
    paddingVertical: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474787',
  },
});
