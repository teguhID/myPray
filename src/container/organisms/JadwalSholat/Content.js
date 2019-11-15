import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import Date from './../../../utility/Date'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subuh: '',
            dzuhur: '',
            ashar: '',
            maghrib: '',
            isya: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch('http://api.aladhan.com/v1/timingsByCity?city=Bandung&country=Indonesia&method=8')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    subuh: responseJson.data.timings.Fajr,
                    dzuhur: responseJson.data.timings.Dhuhr,
                    ashar: responseJson.data.timings.Asr,
                    maghrib: responseJson.data.timings.Maghrib,
                    isya: responseJson.data.timings.Isha,
                    isLoading: false
                })
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 8, backgroundColor: '#ecf0f1' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text> Jadwal Sholat </Text>
                        <ActivityIndicator size='small' />
                    </View>
                    <View style={{ flex: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 8, backgroundColor: '#ecf0f1' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%', marginBottom: '2%' }}>
                        <Text> Jadwal Sholat </Text>
                        <Date />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={styles.box}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: '#474787', fontWeight: 'bold' }}>
                                Subuh : {this.state.subuh}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={styles.box}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: '#474787', fontWeight: 'bold' }}>
                                Dzuhur : {this.state.dzuhur}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={styles.box}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: '#474787', fontWeight: 'bold' }}>
                                Ashar : {this.state.ashar}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={styles.box}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: '#474787', fontWeight: 'bold' }}>
                                Maghrib : {this.state.maghrib}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '2%' }}>
                        <View style={styles.box}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: '#474787', fontWeight: 'bold' }}>
                                Isya : {this.state.isya}
                            </Text>
                        </View>
                    </View>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#dfe4ea',
        width: responsiveWidth(80),
        height: responsiveHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
});
