import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ThirdPartyButton = props => {
  return (
    <View style={{ marginTop: '5%' }}>
      <TouchableOpacity
        style={{
          width: responsiveWidth(75),
          height: responsiveHeight(7),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#ecf0f1',
            fontSize: responsiveFontSize(1.5),
          }}>
          <Icon name="google" size={responsiveFontSize(2)} /> | Login With
          Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ThirdPartyButton;
