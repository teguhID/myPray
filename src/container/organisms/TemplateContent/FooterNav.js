import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Footer, FooterTab} from 'native-base';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import ButtonFooter from './../../../components/molecules/TemplateContent/ButtonFooter';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

class FooterNav extends Component {
  render() {
    return (
      <Footer style={{height: responsiveHeight(10)}}>
        <FooterTab
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#474787',
          }}>
          {/* Nav Footer Bar */}
          <ButtonFooter
            icon="mosque"
            action={() => this.props.ibadahHarian()}
            css={this.props.cssIbadahHarian}
          />
          <ButtonFooter
            icon="fist-raised"
            action={() => this.props.fisikHarian()}
            css={this.props.cssFisikHarian}
          />
          <ButtonFooter
            icon="history"
            action={() => this.props.history()}
            css={this.props.cssHistory}
          />
          <ButtonFooter
            icon="chart-bar"
            action={() => this.props.statistik()}
            css={this.props.cssStatistik}
          />
          <ButtonFooter
            icon="kaaba"
            action={() => this.props.jadwalSholat()}
            css={this.props.cssJadwalSholat}
          />
          <ButtonFooter
            icon="address-card"
            action={() => this.props.about()}
            css={this.props.cssAbout}
          />
          {/* Nav Footer Bar */}
        </FooterTab>
      </Footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    subuh: state.subuh,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ibadahHarian: () => dispatch({type: 'Ibadah_Harian'}),
    fisikHarian: () => dispatch({type: 'Fisik_Harian'}),
    history: () => dispatch({type: 'History'}),
    statistik: () => dispatch({type: 'Statistik'}),
    jadwalSholat: () => dispatch({type: 'Jadwal_Sholat'}),
    about: () => dispatch({type: 'About'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterNav);
