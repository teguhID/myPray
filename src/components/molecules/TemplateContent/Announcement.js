import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { connect } from 'react-redux'

class Announcement extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'orange', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', marginHorizontal: '2%', color: 'white', fontSize: responsiveFontSize(1.9) }}>Laporan Untuk Tanggal : </Text>
                <Text style={{ fontWeight: 'bold', marginHorizontal: '2%', color: 'white', fontSize: responsiveFontSize(1.9) }}>{this.props.dayData}/{this.props.monthData}/{this.props.yearData}</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        dayData: state.day,
        monthData: state.month,
        yearData: state.year,
    };
}

export default connect(mapStateToProps, null)(Announcement)