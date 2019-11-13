import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Content = props => {
  return (
    <View style={{flex: 8, backgroundColor: '#ecf0f1'}}>
      <Text style={{fontSize: responsiveFontSize(2)}}>
        Sedang Dalam Pengembangan
      </Text>
    </View>
  );
};

export default Content;
