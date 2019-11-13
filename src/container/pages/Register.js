import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HeaderButton from './../../components/molecules/Login/HeaderButton';
import RegisterContent from './../organisms/Login/RegisterContent';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Login = () => {
    Actions.Login();
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderButton title="Login" onPress={this.Login} />
        <RegisterContent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
