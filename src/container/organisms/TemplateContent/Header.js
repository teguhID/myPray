import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderTitle from './../../../components/molecules/TemplateContent/HeaderTitle';
import SaveButton from './../../../components/molecules/TemplateContent/SaveButton';

const Header = props => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#474787', }}>
      <HeaderTitle icon={props.icon} title={props.title} />
      <SaveButton onPress={props.onPress} style={props.style} />
    </View>
  );
};

export default Header;
