import React, { Component } from 'react'
import "./index.css"
import Date from "../Date/index.js"
import Span from "../Span/index.js"

export default class index extends Component {
    render() {
        return (
            <div>
                <li className="li" >
                    <Date index={this.props.index} />
                    <Span index={this.props.index} />
                </li>
            </div>
        )
    }
}

