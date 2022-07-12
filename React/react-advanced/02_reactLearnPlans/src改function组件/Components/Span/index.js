import React from 'react'
import "./index.css"

export default function index(props) {
    const planArr = ['学习React', '学习Vue', '学习Webpack', '学习JavaScript'];
    const timeArr = ['40min', '80min', '20min', '40min'];
    return (
        <div className='plan'>
            <span>{planArr[props.index]}</span>
            <span>{timeArr[props.index]}</span>
        </div>
    )
}
