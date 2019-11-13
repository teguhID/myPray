import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Separator} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ListHeader = props => {
  return (
    <Separator bordered style={{height: responsiveHeight(6)}}>
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          alignSelf: 'center',
        }}>
        {props.title}
      </Text>
    </Separator>
  );
};

export default ListHeader;
