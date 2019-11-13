import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <View
      style={{
        flex: 2,
      }}>
      <LinearGradient
        colors={['#7f7fb0', '#474787']}
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: '-30%',
          marginLeft: '-10%',
          height: responsiveHeight(46),
          width: responsiveWidth(80),
          borderRadius: responsiveFontSize(100),
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: responsiveFontSize(3.5),
            marginLeft: '25%',
            marginRight: '30%',
            marginTop: '45%',
          }}>
          Selamat Datang {props.usernameData}
        </Text>
      </LinearGradient>
      <LinearGradient
        colors={['#7f7fb0', '#474787']}
        style={{
          marginTop: '-72%',
          marginLeft: '62%',
          height: responsiveHeight(25),
          width: responsiveWidth(43),
          borderRadius: responsiveFontSize(100),
        }}></LinearGradient>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    usernameData: state.username,
  };
}

export default connect(mapStateToProps)(Header);
