import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Time extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.setState({
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    render() {
        return (
            <Text style={this.props.style}>{this.state.hours} : {this.state.minutes} : {this.state.seconds}</Text>
        )
    }
}
