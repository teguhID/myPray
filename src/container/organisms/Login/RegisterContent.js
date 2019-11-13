import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class RegisterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 8,
          backgroundColor: '#474787',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> Register </Text>
      </View>
    );
  }
}
