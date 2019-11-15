import React, { Component } from 'react'

export default class JadwalSholat extends Component {
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
}
