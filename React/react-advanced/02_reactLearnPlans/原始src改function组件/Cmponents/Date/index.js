import React from 'react'
import "./index.css"
export default function index(props) {
    const dayArr = ['22', '23', '24', '25'];
    return (
        <div className='date'>
            <div>7月</div>
            <div>{dayArr[props.index]}</div>
        </div>
    )
}
