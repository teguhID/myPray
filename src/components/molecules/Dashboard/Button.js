import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.action}>
      <View style={styles.box}>
        <Icon
          name={props.icon}
          color="#474787"
          size={responsiveFontSize(5)}></Icon>
        <Text style={{ fontSize: responsiveFontSize(1.5), color: '#474787' }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ecf0f1',
    width: responsiveWidth(27),
    height: responsiveHeight(14),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
    borderRadius: 20,
    elevation: 5,
  },
});

export default Button;
