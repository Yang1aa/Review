import "./index.css"
import React, { Component } from 'react'

export default class index extends Component {
    dayArr = ['22', '23', '24', '25'];
    render() {
        return (
            <div className='date'>
                <div>7月</div>
                <div>{this.dayArr[this.props.index]}</div>
            </div>
        )
    }
}

