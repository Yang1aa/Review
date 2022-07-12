import React from 'react'
import Father from '../Father'
export default function index() {
    const string = "This is Grandfather's message!"
    return (
        <div>
            <Father Grandfather={string} />
        </div>
    )
}
