import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const HeaderButton = props => {
  return (
    <View style={styles.upper}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'white',
              fontWeight: 'bold',
            }}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderButton;
const styles = StyleSheet.create({
  upper: {
    flex: 1,
    paddingTop: '8%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '5%',
    backgroundColor: '#474787',
  },
});
