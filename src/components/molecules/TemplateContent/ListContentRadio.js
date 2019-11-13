import React, {Component} from 'react';
import {View, Text, TouchableOpacity, CheckBox} from 'react-native';
import {ListItem, Body, Radio} from 'native-base';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListContentRadio = props => {
  return (
    <ListItem>
      <Body>
        {/* <TouchableOpacity onPress={props.onPress}> */}
        <Text
          style={{
            fontSize: responsiveFontSize(2),
          }}>
          {props.title}
        </Text>
        {/* </TouchableOpacity> */}
      </Body>
      <CheckBox onChange={props.onPress} value={props.value} />
    </ListItem>
  );
};

export default ListContentRadio;
