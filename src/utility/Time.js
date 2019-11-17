import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

class Time extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        this.time = setInterval(() => {
            return fetch('https://apimypray.000webhostapp.com/getDateTime')
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        isLoading: false,
                    }, function () {
                        this.props.SaveDayData(responseJson.mday)
                        this.props.SaveMonthData(responseJson.mon)
                        this.props.SaveYearData(responseJson.year)
                    });

                })
                .catch((error) => {
                    console.error(error);
                });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    render() {
        return (
            <Text></Text>
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

function mapDispatchToProps(dispatch) {
    return {
        SaveDayData: (mday) => dispatch({ type: 'SaveDay', dayData: mday }),
        SaveMonthData: (mon) => dispatch({ type: 'SaveMonth', monthData: mon }),
        SaveYearData: (year) => dispatch({ type: 'SaveYear', yearData: year }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)