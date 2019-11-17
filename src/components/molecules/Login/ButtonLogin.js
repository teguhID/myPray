import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const ButtonLogin = props => {
  return (
    <View style={{ marginTop: '5%' }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          borderRadius: responsiveFontSize(2.5),
          backgroundColor: '#ecf0f1',
          width: responsiveWidth(75),
          height: responsiveHeight(7),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#474787',
            fontSize: responsiveFontSize(2),
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonLogin;
