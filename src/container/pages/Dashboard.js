import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  BackHandler,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Footer, FooterTab} from 'native-base';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Header from './../organisms/Dashboard/Header';
import Content from './../organisms/Dashboard/Content';

import LinearGradient from 'react-native-linear-gradient';

class Dashboard extends Component {
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#ecf0f1'}}>
        <Header />
        <Content />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontStyle: 'italic',
              color: 'gray',
              fontFamily: 'Zocial',
              fontSize: responsiveFontSize(2),
            }}>
            "Ayo kelola jadwal ibadah mu'''
          </Text>
        </View>
      </View>
    );
  }
}

export default Dashboard;
