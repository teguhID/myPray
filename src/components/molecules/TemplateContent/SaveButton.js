import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SaveButton = props => {
  return (
    <View style={{ flex: 1.5 }} style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: responsiveFontSize(2),
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View >
  );
};

export default SaveButton;
