import React from 'react'
import "./index.css"
import Date from "./Date/index.js"
import Span from "./Span/index.js"
export default function index(props) {    
    return (
        <div>
            <li className="li" >
                <Date item={props.item} />
                <Span item={props.item} />
            </li>
        </div>
    )
}
