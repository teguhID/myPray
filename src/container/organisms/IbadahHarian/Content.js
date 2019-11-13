import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ListHeader from './../../../components/molecules/TemplateContent/ListHeader';
import ListContentRadio from './../../../components/molecules/TemplateContent/ListContentRadio';
import { connect } from 'react-redux';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null };
  }
  componentDidMount() {
    return fetch(this.props.urlData + 'ibadahHarian/get/' + this.props.usernameData)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function () {
            {
              this.state.dataSource.map((item, key) => {
                if (item.subuh == 0) {
                  this.props.getDBDataSubuhFalse();
                }
                if (item.subuh == 1) {
                  this.props.getDBDataSubuhTrue();
                }
                if (item.dzuhur == 0) {
                  this.props.getDBDataDzuhurFalse();
                }
                if (item.dzuhur == 1) {
                  this.props.getDBDataDzuhurTrue();
                }
                if (item.ashar == 0) {
                  this.props.getDBDataAsharFalse();
                }
                if (item.ashar == 1) {
                  this.props.getDBDataAsharTrue();
                }
                if (item.maghrib == 0) {
                  this.props.getDBDataMaghribFalse();
                }
                if (item.maghrib == 1) {
                  this.props.getDBDataMaghribTrue();
                }
                if (item.isya == 0) {
                  this.props.getDBDataIsyaFalse();
                }
                if (item.isya == 1) {
                  this.props.getDBDataIsyaTrue();
                }
                if (item.dhuha == 0) {
                  this.props.getDBDataDhuhaFalse();
                }
                if (item.dhuha == 1) {
                  this.props.getDBDataDhuhaTrue();
                }
                if (item.tahajud == 0) {
                  this.props.getDBDataTahajudFalse();
                }
                if (item.tahajud == 1) {
                  this.props.getDBDataTahajudTrue();
                }
                if (item.tadarus_quran == 0) {
                  this.props.getDBDataTadarusFalse();
                }
                if (item.tadarus_quran == 1) {
                  this.props.getDBDataTadarusTrue();
                }
                if (item.baca_sirah == 0) {
                  this.props.getDBDataSirahFalse();
                }
                if (item.baca_sirah == 1) {
                  this.props.getDBDataSirahTrue();
                }
                if (item.hafalan_quran == 0) {
                  this.props.getDBDataHafalanQuranFalse();
                }
                if (item.hafalan_quran == 1) {
                  this.props.getDBDataHafalanQuranTrue();
                }
                if (item.hafalan_hadist == 0) {
                  this.props.getDBDataHafalanHadistFalse();
                }
                if (item.hafalan_hadist == 1) {
                  this.props.getDBDataHafalanHadistTrue();
                }
              });
            }
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 8,
            backgroundColor: '#ecf0f1',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ActivityIndicator size="large" />
          <Text>{this.props.subuhData}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 8, backgroundColor: '#ecf0f1' }}>
          {this.state.dataSource.map((item, key) => {
            return (
              <ScrollView key={key} style={{ marginVertical: '5%' }}>
                {/* WAJUB */}
                <ListHeader title="Sholat Wajib" />
                {/* ======================================== SUBUH ======================================== */}
                <ListContentRadio
                  title="Subuh"
                  onPress={() => this.props.subuh()}
                  value={this.props.subuhData}
                />
                {/* ======================================== DZUHUR ======================================== */}
                <ListContentRadio
                  title="Dzuhur"
                  onPress={() => this.props.dzuhur()}
                  value={this.props.dzuhurData}
                />
                {/* ======================================== ASHAR ======================================== */}
                <ListContentRadio
                  title="Ashar"
                  onPress={() => this.props.ashar()}
                  value={this.props.asharData}
                />
                {/* ======================================== MAGHRIB ======================================== */}
                <ListContentRadio
                  title="Maghrib"
                  onPress={() => this.props.maghrib()}
                  value={this.props.maghribData}
                />
                {/* ======================================== ISYA ======================================== */}
                <ListContentRadio
                  title="Isya"
                  onPress={() => this.props.isya()}
                  value={this.props.isyaData}
                />
                {/* SUNNAH */}
                <ListHeader title="Sholat Sunnah" />
                {/* ======================================== DHUHA ======================================== */}
                <ListContentRadio
                  title="Dhuha"
                  onPress={() => this.props.dhuha()}
                  value={this.props.dhuhaData}
                />
                {/* ======================================== TAHAJUD ======================================== */}
                <ListContentRadio
                  title="Tahajud"
                  onPress={() => this.props.tahajud()}
                  value={this.props.tahajudData}
                />
                {/* Lainnya */}
                <ListHeader title="Lainnya" />
                {/* ======================================== TADARUS QURAN ======================================== */}
                <ListContentRadio
                  title="Tadarus Al-Qur'an"
                  onPress={() => this.props.tadarus()}
                  value={this.props.tadarusData}
                />
                {/* ======================================== BACA SIRAH ======================================== */}
                <ListContentRadio
                  title="Baca Sirah"
                  onPress={() => this.props.sirah()}
                  value={this.props.sirahData}
                />
                {/* ======================================== Hafalan Quran ======================================== */}
                <ListContentRadio
                  title="Hafalan Al-Qur'an"
                  onPress={() => this.props.hafalanQuran()}
                  value={this.props.hafalanQuranData}
                />
                {/* ======================================== HAFALAN HADIST ======================================== */}
                <ListContentRadio
                  title="Hafalan Hadist"
                  onPress={() => this.props.hafalanHadist()}
                  value={this.props.hafalanHadistData}
                />
              </ScrollView>
            );
          })}
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
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
    usernameData: state.username,
    urlData: state.url,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    subuh: () => dispatch({ type: 'Subuh' }),
    dzuhur: () => dispatch({ type: 'Dzuhur' }),
    ashar: () => dispatch({ type: 'Ashar' }),
    maghrib: () => dispatch({ type: 'Maghrib' }),
    isya: () => dispatch({ type: 'Isya' }),
    dhuha: () => dispatch({ type: 'Dhuha' }),
    tahajud: () => dispatch({ type: 'Tahajud' }),
    tadarus: () => dispatch({ type: 'Tadarus' }),
    sirah: () => dispatch({ type: 'Sirah' }),
    hafalanQuran: () => dispatch({ type: 'HafalanQuran' }),
    hafalanHadist: () => dispatch({ type: 'HafalanHadist' }),
    // =========== GET DATA DB ================== //
    getDBDataSubuhFalse: () => dispatch({ type: 'GetDBDataSubuhFalse' }),
    getDBDataSubuhTrue: () => dispatch({ type: 'GetDBDataSubuhTrue' }),
    getDBDataDzuhurFalse: () => dispatch({ type: 'GetDBDataDzuhurFalse' }),
    getDBDataDzuhurTrue: () => dispatch({ type: 'GetDBDataDzuhurTrue' }),
    getDBDataAsharFalse: () => dispatch({ type: 'GetDBDataAsharFalse' }),
    getDBDataAsharTrue: () => dispatch({ type: 'GetDBDataAsharTrue' }),
    getDBDataMaghribFalse: () => dispatch({ type: 'GetDBDataMaghribFalse' }),
    getDBDataMaghribTrue: () => dispatch({ type: 'GetDBDataMaghribTrue' }),
    getDBDataIsyaFalse: () => dispatch({ type: 'GetDBDataIsyaFalse' }),
    getDBDataIsyaTrue: () => dispatch({ type: 'GetDBDataIsyaTrue' }),
    getDBDataDhuhaFalse: () => dispatch({ type: 'GetDBDataDhuhaFalse' }),
    getDBDataDhuhaTrue: () => dispatch({ type: 'GetDBDataDhuhaTrue' }),
    getDBDataTahajudFalse: () => dispatch({ type: 'GetDBDataTahajudFalse' }),
    getDBDataTahajudTrue: () => dispatch({ type: 'GetDBDataTahajudTrue' }),
    getDBDataTadarusFalse: () => dispatch({ type: 'GetDBDataTadarusFalse' }),
    getDBDataTadarusTrue: () => dispatch({ type: 'GetDBDataTadarusTrue' }),
    getDBDataSirahFalse: () => dispatch({ type: 'GetDBDataSirahFalse' }),
    getDBDataSirahTrue: () => dispatch({ type: 'GetDBDataSirahTrue' }),
    getDBDataHafalanQuranFalse: () =>
      dispatch({ type: 'GetDBDataHafalanQuranFalse' }),
    getDBDataHafalanQuranTrue: () =>
      dispatch({ type: 'GetDBDataHafalanQuranTrue' }),
    getDBDataHafalanHadistFalse: () =>
      dispatch({ type: 'GetDBDataHafalanHadistFalse' }),
    getDBDataHafalanHadistTrue: () =>
      dispatch({ type: 'GetDBDataHafalanHadistTrue' }),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
