import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ButtonFooter = props => {
  return (
    <TouchableOpacity
      onPress={props.action}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon
        name={props.icon}
        color="white"
        size={responsiveFontSize(3)}
        style={props.css}></Icon>
    </TouchableOpacity>
  );
};

export default ButtonFooter;
