import React from 'react'
import "./index.css"
export default function index(props) {
    return (
        <div className='date'>
            <div>{props.item.month}</div>
            <div>{props.item.day}</div>
        </div>
    )
}
