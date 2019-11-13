import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HeaderButton from './../../components/molecules/Login/HeaderButton';
import Upper from './../organisms/Login/Upper';
import Lower from './../organisms/Login/Lower';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Register = () => {
    Actions.Register();
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView style={{}}>
            <HeaderButton title="Register" onPress={this.Register} />
            <Upper />
            <Lower />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474787',
  },
});
