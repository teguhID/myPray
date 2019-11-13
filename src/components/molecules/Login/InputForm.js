import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Item, Input} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const InputForm = props => {
  return (
    <View style={{marginBottom: '2%'}}>
      <Text
        style={{
          color: 'white',
          fontSize: responsiveFontSize(2),
          marginLeft: '5%',
          marginBottom: '1%',
        }}>
        {props.title}
      </Text>
      <Item
        rounded
        style={{
          width: responsiveWidth(75),
          height: responsiveHeight(7),
        }}>
        <Input
          style={{color: 'white', fontSize: responsiveFontSize(2)}}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={props.password}
        />
      </Item>
    </View>
  );
};
export default InputForm;
