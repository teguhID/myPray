import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Body, Radio, Item, Input, Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ListContentNumberForm = props => {
  return (
    <Item
      style={{
        marginVertical: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        padding: '2%',
      }}>
      <Label style={{fontSize: responsiveFontSize(2)}}>{props.title} :</Label>
      <Input
        style={{textAlign: 'right'}}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType="numeric"
        maxLength={2}
      />
      <Icon
        name="info-circle"
        size={responsiveFontSize(2)}
        color="red"
        style={{marginLeft: '3%'}}
      />
      <Text style={{fontSize: responsiveFontSize(2)}}> Per 1 Menit</Text>
    </Item>
  );
};

export default ListContentNumberForm;
