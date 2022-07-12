import React from 'react'
export default function index(props) {
    console.log("son props", props);
    return (
        <div>
            <h1>{`Grandfather传参：${props.Grandfather}`}</h1>
            <h1>{`Father传参：${props.Father}`}</h1>
        </div>
    )
}