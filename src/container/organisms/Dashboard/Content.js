import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import Button from './../../../components/molecules/Dashboard/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushUp: '1000x',
    };
  }

  IbadahHarianPage = () => {
    this.props.ibadahHarian(); //ubah data state untuk menentukan isi content
    Actions.ContentPage(); //redirect ke content page
  };
  FisikHarianPage = () => {
    this.props.fisikHarian();
    Actions.ContentPage();
  };
  History = () => {
    this.props.history();
    Actions.ContentPage();
  };
  Statistik = () => {
    this.props.statistik();
    Actions.ContentPage();
  };
  JadwalSholat = () => {
    this.props.jadwalSholat();
    Actions.ContentPage();
  };
  About = () => {
    this.props.about();
    Actions.ContentPage();
  };

  render() {
    return (
      <View style={styles.boxContent}>
        <View style={styles.boxSection}>
          <Button icon="mosque" title="Ibadah Harian" action={this.IbadahHarianPage} />
          <Button icon="fist-raised" title="Fisik Harian" action={this.FisikHarianPage} />
          <Button icon="history" title="History" action={this.History} />
        </View>

        <View style={styles.boxSection}>
          <Button icon="chart-bar" title="Staistik" action={this.Statistik} />
          <Button icon="kaaba" title="Jadwal Sholat" action={this.JadwalSholat} />
          <Button icon="address-card" title="About" action={this.About} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    pushUpData: state.pushUp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ibadahHarian: () => dispatch({ type: 'Ibadah_Harian' }),
    fisikHarian: () => dispatch({ type: 'Fisik_Harian' }),
    history: () => dispatch({ type: 'History' }),
    statistik: () => dispatch({ type: 'Statistik' }),
    jadwalSholat: () => dispatch({ type: 'Jadwal_Sholat' }),
    about: () => dispatch({ type: 'About' }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);

const styles = StyleSheet.create({
  boxContent: {
    flex: 3.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '5%',
    // backgroundColor: '#ecf0f1',
  },
  boxSection: {
    // backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
