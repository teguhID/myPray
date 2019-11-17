import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import FooterNav from './../container/organisms/TemplateContent/FooterNav';
import Dashboard from './../container/pages/Dashboard';
import ContentPage from './../container/pages/ContentPage';
import IbadahHarian from './../container/organisms/IbadahHarian/Content';
import Login from './../container/pages/Login';
import Register from './../container/pages/Register';

import Test from './../test';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* FULL CONTENT */}
          <Scene
            key="Dashboard"
            component={Dashboard}
            title="Dashboard"
            hideNavBar={true}
          />
          <Scene
            key="ContentPage"
            component={ContentPage}
            title="Content Page"
            hideNavBar={true}
          />
          <Scene
            key="Login"
            component={Login}
            title="Login"
            hideNavBar={true}
            initial
          />
          <Scene
            key="Register"
            component={Register}
            title="Register"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
