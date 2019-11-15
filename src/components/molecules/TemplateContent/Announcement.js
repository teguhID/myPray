import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default class Announcement extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'orange', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', marginHorizontal: '2%', color: 'white', fontSize: responsiveFontSize(1.9) }}>Laporan Untuk Tanggal : </Text>
                {/* <Text style={{ fontWeight: 'bold', marginHorizontal: '2%', color: 'white', fontSize: responsiveFontSize(1.9) }}>Data akan otomatis ter upload ke server sesuai dengan apa yang telah terisi pada pukul 23:59:59 </Text> */}
            </View>
        )
    }
}
