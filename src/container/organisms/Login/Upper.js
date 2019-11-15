import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Logo from './../../../components/molecules/Login/Logo';

export default class Upper extends Component {
  render() {
    return (
      <View style={styles.upper}>
        <Logo />
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
