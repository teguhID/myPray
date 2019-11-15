import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import ListHeader from './../../../components/molecules/TemplateContent/ListHeader';
import ListContentNumberForm from './../../../components/molecules/TemplateContent/ListContentNumberForm';
import Announcement from './../../../components/molecules/TemplateContent/Announcement'
import { connect } from 'react-redux';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null };
  }

  componentDidMount() {
    return fetch(
      // 'http://10.0.0.167:8000/fisikHarian/get/' + this.props.usernameData,
      this.props.urlData + 'fisikHarian/get/' + this.props.usernameData,
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        },
          function () {
            this.state.dataSource.map((item, key) => {
              this.props.getDBDataPushUp(item.push_up);
              this.props.getDBDataSitUp(item.sit_up);
              this.props.getDBDataSquatJump(item.squat_jump);
            });
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
          style={{ flex: 8, backgroundColor: '#ecf0f1', justifyContent: 'center', alignContent: 'center', }}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 8, backgroundColor: '#ecf0f1' }}>
          <Announcement />
          {this.state.dataSource.map((item, key) => {
            return (
              <ScrollView key={key} style={{ marginVertical: '5%' }}>
                <ListHeader title="Wajib" />
                <ListContentNumberForm
                  title="Push Up"
                  onChangeText={this.props.pushUp}
                  value={this.props.pushUpData}
                />
                <ListContentNumberForm
                  title="Sit Up"
                  onChangeText={this.props.sitUp}
                  value={this.props.sitUpData}
                />
                <ListContentNumberForm
                  title="Squat Jump"
                  onChangeText={this.props.squatJump}
                  value={this.props.squatJumpData}
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
    pushUpData: state.pushUp,
    sitUpData: state.sitUp,
    squatJumpData: state.squatJump,
    usernameData: state.username,
    urlData: state.url,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    pushUp: jumlah => dispatch({ type: 'PushUp', jumlahPushUp: jumlah }),
    sitUp: jumlah => dispatch({ type: 'SitUp', jumlahSitUp: jumlah }),
    squatJump: jumlah => dispatch({ type: 'SquatJump', jumlahSquatJump: jumlah }),
    getDBDataPushUp: data => dispatch({ type: 'GetDBDataPushUp', dataDBPushUp: data }),
    getDBDataSitUp: data => dispatch({ type: 'GetDBDataSitUp', dataDBSitUp: data }),
    getDBDataSquatJump: data => dispatch({ type: 'GetDBDataSquatJump', dataDBSquatJump: data }),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
