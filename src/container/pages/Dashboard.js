import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './../organisms/Dashboard/Header';
import Content from './../organisms/Dashboard/Content';
import Footer from './../organisms/Dashboard/Footer';
import Date from './../../utility/Date'

class Dashboard extends Component {

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ecf0f1' }}>
        <Header />
        <Content />
        <Footer />

        {/* UPLOAD API DATA TO REDUX */}
      </View>
    );
  }
}


export default Dashboard;
