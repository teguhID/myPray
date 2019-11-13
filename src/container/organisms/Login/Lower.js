import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import InputForm from './../../../components/molecules/Login/InputForm';
import ButtonLogin from './../../../components/molecules/Login/ButtonLogin';
import ThirdPartyButton from './../../../components/molecules/Login/ThirdPartyButton';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Lower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isLoading: true,
      dataSource: null,
    };
  }

  // ====================== ACTION LOGIN =======================//
  SubmitLogin = () => {
    // fetch('http://10.0.0.167:8000/login', {
    fetch(this.props.urlData + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.usernameData,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            dataSource: responseJson.data,
            isLoading: false,
          },
          function () {
            this.state.dataSource.map((val, key) => {
              if (val.status == 'Failure') {
                if (this.state.isLoading) {
                  <ActivityIndicator></ActivityIndicator>;
                } else {
                  alert('username atau password salah');
                  this.setState({ password: '' });
                }
              }
              if (val.status == 'Success') {
                if (this.state.isLoading) {
                  <ActivityIndicator></ActivityIndicator>;
                } else {
                  Actions.Dashboard({
                    onBack: () => console.log('custom back callback'),
                  });
                }
              }
              if (this.state.dataSource == null) {
                alert('koneksi bermasalah');
              }
            });
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };
  // ====================== ACTION LOGIN =======================//

  render() {
    return (
      <View style={styles.lower}>
        <InputForm
          title="username"
          onChangeText={this.props.username}
          value={this.props.usernameData}
        />
        <InputForm
          title="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          password={true}
        />
        <ButtonLogin onPress={this.SubmitLogin} />
        <ThirdPartyButton />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    usernameData: state.username,
    urlData: state.url,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    username: username => dispatch({ type: 'Username', dataUsername: username }),
  };
}

const styles = StyleSheet.create({
  lower: {
    flex: 6,
    paddingBottom: '14%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474787',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lower);
