import React from 'react'
import Son from '../Son'
export default function index(props) {
    console.log("father props", props)
    const string = "This is Father's message!"
    return (
        <div>
            <Son Father={string} Grandfather={props.Grandfather} />
        </div>
    )
}
