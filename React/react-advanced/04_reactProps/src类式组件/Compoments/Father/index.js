import React, { Component } from 'react'
import Son from '../Son'

export default class index extends Component {
    string = "This is Father's message!"
    render() {
        return (
            <div>
                <Son Father={this.string} Grandfather={this.props.Grandfather} />
            </div>
        )
    }
}
