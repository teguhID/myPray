import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Logo = props => {
  return (
    <View>
      <Icon name="slack" size={responsiveFontSize(8)} color="white" />
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          color: 'white',
          fontWeight: 'bold',
        }}>
        My Pray
      </Text>
    </View>
  );
};
export default Logo;
