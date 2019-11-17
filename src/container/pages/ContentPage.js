import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';

import Header from './../organisms/TemplateContent/Header';
import IbadahHarian from './../organisms/IbadahHarian/Content';
import FisikHarian from './../organisms/FisikHarian/Content';
import JadwalSholat from './../organisms/JadwalSholat/Content'
import Pengembangan from './../organisms/Pengembangan/Content';
import FooterNav from './../organisms/TemplateContent/FooterNav';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subuh: 0,
    };
  }

  SaveIbadahHarian = () => {
    fetch(
      this.props.urlData + 'ibadahHarian/update/' + this.props.usernameData,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subuh: this.props.subuhData,
          dzuhur: this.props.dzuhurData,
          ashar: this.props.asharData,
          maghrib: this.props.maghribData,
          isya: this.props.isyaData,
          dhuha: this.props.dhuhaData,
          tahajud: this.props.tahajudData,
          tadarus_quran: this.props.tadarusData,
          baca_sirah: this.props.sirahData,
          hafalan_quran: this.props.hafalanQuranData,
          hafalan_hadist: this.props.hafalanHadistData,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function () {
            alert('data berhasil di simpan');
            Actions.ContentPage();
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  SaveFisikHarian = () => {
    fetch(
      this.props.urlData + 'fisikHarian/update/' + this.props.usernameData,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          push_up: this.props.pushUpData,
          sit_up: this.props.sitUpData,
          squat_jump: this.props.squatJumpData,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function () {
            alert('data berhasil di simpan');
            Actions.ContentPage();
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.props.page == 'Ibadah Harian') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="mosque" title="Ibadah Harian" onPress={this.SaveIbadahHarian} style={{ opacity: 1.0, marginRight: '3%' }} />
            <IbadahHarian />
            <FooterNav cssIbadahHarian={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    }
    if (this.props.page == 'Fisik Harian') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="fist-raised" title="Fisik Harian" onPress={this.SaveFisikHarian} style={{ opacity: 1.0, marginRight: '3%' }} />
            <FisikHarian />
            <FooterNav cssFisikHarian={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    }
    if (this.props.page == 'History') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="history" title="History" style={{ opacity: 0.0, marginRight: '3%' }} />
            <Pengembangan />
            <FooterNav cssHistory={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    }
    if (this.props.page == 'Statistik') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="chart-bar" title="Statistik" style={{ opacity: 0.0, marginRight: '3%' }} />
            <Pengembangan />
            <FooterNav cssStatistik={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    }
    if (this.props.page == 'Jadwal Sholat') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="kaaba" title="Jadwal Sholat" style={{ opacity: 0.0, marginRight: '3%' }} />
            <JadwalSholat />
            <FooterNav cssJadwalSholat={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    }
    if (this.props.page == 'About') {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="address-card" title="About" style={{ opacity: 0.0, marginRight: '3%' }} />
            <Pengembangan />
            <FooterNav cssAbout={{ color: '#8b86d1' }} />
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Header icon="exclamation-triangle" title="" style={{ opacity: 0.0, marginRight: '3%' }} />
            <Pengembangan />
            <FooterNav />
          </View>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    subuhData: state.subuh,
    dzuhurData: state.dzuhur,
    asharData: state.ashar,
    maghribData: state.maghrib,
    isyaData: state.isya,
    dhuhaData: state.dhuha,
    tahajudData: state.tahajud,
    tadarusData: state.tadarus,
    sirahData: state.sirah,
    hafalanQuranData: state.hafalanQuran,
    hafalanHadistData: state.hafalanHadist,

    pushUpData: state.pushUp,
    sitUpData: state.sitUp,
    squatJumpData: state.squatJump,

    urlData: state.url,
    usernameData: state.username,
  };
}

export default connect(mapStateToProps)(ContentPage);
