import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const HeaderTitle = props => {
  return (
    <View style={{flex: 7}}>
      <Icon
        name={props.icon}
        color="white"
        size={responsiveFontSize(2)}
        style={{alignSelf: 'center', marginLeft: '22%'}}>
        {' '}
        <Text> {props.title}</Text>
      </Icon>
    </View>
  );
};

export default HeaderTitle;
