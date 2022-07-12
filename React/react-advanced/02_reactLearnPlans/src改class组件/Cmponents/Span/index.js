import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {
    planArr = ['学习React', '学习Vue', '学习Webpack', '学习JavaScript'];
    timeArr = ['40min', '80min', '20min', '40min'];
    render() {
    return (
        <div className='plan'>
            <span>{this.planArr[this.props.index]}</span>
            <span>{this.timeArr[this.props.index]}</span>
        </div>
    )
  }
}
