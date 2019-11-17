import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { connect } from 'react-redux'
import Time from './../../../utility/Time'
import Position from './../../../utility/Position'

class Footer extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Icon
                    style={{ marginRight: '2%' }}
                    name='map-marker-alt'
                    color="#474787"
                    size={responsiveFontSize(5)}>
                </Icon>
                <Position style={{ fontWeight: 'bold' }} />
                <Time />
            </View>
        )
    }
}
export default (Footer)
