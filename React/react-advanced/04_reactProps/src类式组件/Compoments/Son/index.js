import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <h1>{`Grandfather传参：${this.props.Grandfather}`}</h1>
                <h1>{`Father传参：${this.props.Father}`}</h1>
            </div>
        )
    }
}
