import React from 'react'
import "./index.css"

export default function index(props) {
    return (
        <div className='plan'>
            <span>{props.item.plan}</span>
            <span>{props.item.time}</span>
        </div>
    )
}
