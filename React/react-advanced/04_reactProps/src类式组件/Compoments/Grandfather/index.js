import React, { Component } from 'react'
import Father from '../Father'

export default class index extends Component {
    string = "This is Grandfather's message!"
    render() {
        return (
            <div>
                <Father Grandfather={this.string} />
            </div>
        )
    }
}

