import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  BackHandler,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from './../organisms/Dashboard/Header';
import Content from './../organisms/Dashboard/Content';
import Footer from './../organisms/Dashboard/Footer'

class Dashboard extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ecf0f1' }}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

export default Dashboard;
